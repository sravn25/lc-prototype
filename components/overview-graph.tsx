"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  LabelList,
} from "recharts";
import { Card, CardContent } from "./ui/card";

const rawData = [
  { date: "Jul 1", CO: 30, DO: 28, revenue: 2800 },
  { date: "Jul 2", CO: 32, DO: 31, revenue: 3100 },
  { date: "Jul 3", CO: 35, DO: 34, revenue: 3400 },
  { date: "Jul 4", CO: 28, DO: 25, revenue: 2500 },
  { date: "Jul 5", CO: 30, DO: 29, revenue: 2900 },
  { date: "Jul 6", CO: 40, DO: 38, revenue: 3800 },
  { date: "Jul 7", CO: 38, DO: 36, revenue: 3600 },
  { date: "Jul 8", CO: 42, DO: 40, revenue: 4000 },
  { date: "Jul 9", CO: 37, DO: 34, revenue: 3400 },
  { date: "Jul 10", CO: 45, DO: 42, revenue: 4200 },
  { date: "Jul 11", CO: 30, DO: 27, revenue: 2700 },
  { date: "Jul 12", CO: 36, DO: 34, revenue: 3400 },
  { date: "Jul 13", CO: 40, DO: 39, revenue: 3900 },
  { date: "Jul 14", CO: 34, DO: 32, revenue: 3200 },
  { date: "Jul 15", CO: 31, DO: 29, revenue: 2900 },
  { date: "Jul 16", CO: 39, DO: 37, revenue: 3700 },
  { date: "Jul 17", CO: 44, DO: 42, revenue: 4200 },
  { date: "Jul 18", CO: 33, DO: 31, revenue: 3100 },
  { date: "Jul 19", CO: 29, DO: 27, revenue: 2700 },
  { date: "Jul 20", CO: 35, DO: 34, revenue: 3400 },
  { date: "Jul 21", CO: 38, DO: 36, revenue: 3600 },
  { date: "Jul 22", CO: 42, DO: 41, revenue: 4100 },
  { date: "Jul 23", CO: 36, DO: 35, revenue: 3500 },
  { date: "Jul 24", CO: 30, DO: 29, revenue: 2900 },
  { date: "Jul 25", CO: 39, DO: 37, revenue: 3700 },
  { date: "Jul 26", CO: 43, DO: 42, revenue: 4200 },
  { date: "Jul 27", CO: 31, DO: 29, revenue: 2900 },
  { date: "Jul 28", CO: 34, DO: 32, revenue: 3200 },
  { date: "Jul 29", CO: 40, DO: 39, revenue: 3900 },
  { date: "Jul 30", CO: 37, DO: 35, revenue: 3500 },
  { date: "Jul 31", CO: 35, DO: 34, revenue: 3400 },
].map((item) => ({
  ...item,
  processingRate:
    item.CO === 0 ? 0 : Number(((item.DO / item.CO) * 100).toFixed(1)),
}));

export default function OverviewGraph() {
  const CustomTooltip = ({ active, payload }: TooltipPropsValue) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="p-2 rounded border bg-background shadow">
          <p className="text-sm font-medium">{data.date}</p>
          <p className="text-xs">Revenue: RM {data.revenue}</p>
          <p className="text-xs">Processing Rate: {data.processingRate}%</p>
          <p className="text-xs">CO: {data.CO}</p>
          <p className="text-xs">DO: {data.DO}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          Revenue vs Processing Rate (July)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={rawData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#34a853" />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#ff7300"
              domain={[0, 120]}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            {/* Revenue as Bar */}
            <Bar yAxisId="left" dataKey="revenue" fill="#34a853" name="Revenue">
              <LabelList dataKey="revenue" position="top" />
            </Bar>

            {/* Processing Rate as Line */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="processingRate"
              stroke="#ff7300"
              strokeWidth={2}
              name="Processing Rate"
              dot={{ r: 3 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
