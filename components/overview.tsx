import { alertData } from "@/data/alert-data";
import { DASHBOARD_ROLE } from "@/lib/types";
import Notice from "./notice";
import { cardData } from "@/data/card-data";
import BasicCard from "./basic-card";
import DetailCard from "./detail-card";
import { customerData, inventoryData, qualityData } from "@/lib/data";
import { Badge } from "./ui/badge";
import { DropletsIcon, SplitIcon } from "lucide-react";

export default function DashboardOverview({ role }: { role: DASHBOARD_ROLE }) {
  const renderDetailCards = () => {
    if (role === "operation") {
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <DetailCard
            title="Torn & Stained"
            desc="Items recorded from quality check (highlighted in red passed treshold)"
            items={qualityData
              .filter((item) => item.torn > 0 || item.stain > 0)
              .sort((a, b) => b.torn + b.stain - (a.torn + a.stain))}
            keyExtractor={(item) => item.id}
            leftRender={(item) => (
              <>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </>
            )}
            rightRender={(item) => (
              <div className="flex gap-1">
                <Badge
                  variant={`${item.torn >= item.treshold ? "destructive" : "outline"}`}
                  className={`${item.torn >= item.treshold ? "text-white font-bold" : ""}`}
                >
                  <SplitIcon />
                  {item.torn} torn
                </Badge>
                <Badge
                  variant={`${item.stain >= item.treshold ? "destructive" : "outline"}`}
                  className={`${item.stain >= item.treshold ? "text-white font-bold" : ""}`}
                >
                  <DropletsIcon />
                  {item.stain} stained
                </Badge>
              </div>
            )}
          />
        </div>
      );
    }

    return (
      <div className="grid gap-4 md:grid-cols-2">
        <DetailCard
          title="Recent Low Stock Items"
          desc="Items that need restocking"
          items={inventoryData.filter(
            (item) =>
              item.status === "Low Stock" || item.status === "Out of Stock",
          )}
          keyExtractor={(item) => item.id}
          leftRender={(item) => (
            <>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </>
          )}
          rightRender={(item) => (
            <Badge
              variant={
                item.status === "Out of Stock" ? "destructive" : "secondary"
              }
            >
              {item.stock} left
            </Badge>
          )}
        />

        <DetailCard
          title="Top Customers"
          desc="Customers with highest spending"
          items={[...customerData]
            .sort((a, b) => b.totalSpent - a.totalSpent)
            .slice(0, 4)}
          keyExtractor={(customer) => customer.id}
          leftRender={(customer) => (
            <>
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-muted-foreground">
                {customer.totalOrders} orders
              </p>
            </>
          )}
          rightRender={(customer) => (
            <div className="text-right">
              <p className="font-medium">${customer.totalSpent.toFixed(2)}</p>
              <Badge
                variant={customer.status === "VIP" ? "default" : "secondary"}
              >
                {customer.status}
              </Badge>
            </div>
          )}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here&apos;s an overview of your
          business.
        </p>
      </div>

      {alertData[role].map((data) => (
        <Notice
          key={data.title}
          title={data.title}
          desc={data.desc}
          important={data.important}
        />
      ))}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cardData[role].map((data) => (
          <BasicCard
            key={data.title}
            title={data.title}
            amount={data.amount}
            dir={data.dir}
            sub={data.sub}
            icon={data.icon}
          />
        ))}
      </div>
      {renderDetailCards()}
    </div>
  );
}
