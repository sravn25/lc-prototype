import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "../ui/card";

const linenData = [
  { month: "Aug '24", total: 10000 },
  { month: "Sep '24", total: 10000 },
  { month: "Oct '24", total: 10000 },
  { month: "Nov '24", total: 9993 },
  { month: "Dec '24", total: 9980 },
  { month: "Jan '25", total: 10000 },
  { month: "Feb '25", total: 9999 },
  { month: "Mar '25", total: 9990 },
  { month: "Apr '25", total: 10000 },
  { month: "May '25", total: 10000 },
  { month: "Jun '25", total: 10000 },
  { month: "Jul '25", total: 9990 },
];

export default function LinenCirculationChart() {
  const threshold = 10000;
  const values = linenData.map((d) => d.total);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const buffer = 100;

  return (
    <Card className="w-full">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">
          Total Linen in Circulation (last 12 months)
        </h2>
        <ResponsiveContainer width="100%" height={360}>
          <LineChart
            data={linenData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[min - buffer, max + buffer]} />
            <Tooltip
              formatter={(value: number) => {
                const threshold = 10000;
                const diff = threshold - value;
                const diffText =
                  diff !== 0 ? ` (Δ ${diff > 0 ? "+" : ""}${diff})` : "";
                return [`${value.toLocaleString()}${diffText}`, "Total"];
              }}
              labelFormatter={(label: string) => `Month: ${label}`}
            />
            <ReferenceLine
              y={threshold}
              label="Threshold"
              stroke="red"
              strokeDasharray="4 4"
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#730202"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
