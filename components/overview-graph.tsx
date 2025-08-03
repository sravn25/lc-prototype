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
  { month: "Aug '24", CO: 950, DO: 910, revenue: 90000 },
  { month: "Sep '24", CO: 980, DO: 940, revenue: 93000 },
  { month: "Oct '24", CO: 1020, DO: 990, revenue: 96000 },
  { month: "Nov '24", CO: 970, DO: 940, revenue: 91000 },
  { month: "Dec '24", CO: 1000, DO: 970, revenue: 94000 },
  { month: "Jan '25", CO: 980, DO: 950, revenue: 92000 },
  { month: "Feb '25", CO: 900, DO: 870, revenue: 89000 },
  { month: "Mar '25", CO: 1030, DO: 1000, revenue: 97000 },
  { month: "Apr '25", CO: 980, DO: 940, revenue: 92000 },
  { month: "May '25", CO: 990, DO: 960, revenue: 94000 },
  { month: "Jun '25", CO: 1010, DO: 980, revenue: 96000 },
  { month: "Jul '25", CO: 1000, DO: 970, revenue: 95000 },
].map((item) => ({
  ...item,
  processingRate:
    item.CO === 0 ? 0 : Number(((item.DO / item.CO) * 100).toFixed(1)),
}));

export default function OverviewGraph() {
  // @ts-expect-error payload type issue
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="p-2 rounded border bg-background shadow">
          <p className="text-sm font-medium">{data.month}</p>
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
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" stroke="#34a853" />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#ff7300"
              domain={[0, 120]}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip content={CustomTooltip} />
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
