import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface BasicCardProps {
  title: string;
  amount: string;
  dir: "up" | "down";
  sub: string;
  icon: LucideIcon;
}

const BasicCard = ({ title, amount, dir, sub, icon: Icon }: BasicCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">
          <span
            className={`${dir === "up" ? "text-green-600" : "text-red-600"} flex items-center`}
          >
            {dir === "up" ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {sub}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
