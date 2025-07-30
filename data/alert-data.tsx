import { ReactNode } from "react";
import { DASHBOARD_ROLE } from "@/lib/types";

type Entry = {
  title: string;
  desc: ReactNode;
  important: boolean;
};

export const alertData: Record<DASHBOARD_ROLE, Entry[]> = {
  management: [
    {
      title: "Alert",
      desc: (
        <ul className="list-inside list-disc text-sm">
          <li>
            High torn amount - exceeded by <b>13</b> linens
          </li>
          <li>
            Efficiency is down by <b>23%</b> today
          </li>
        </ul>
      ),
      important: true,
    },
  ],
  operation: [
    {
      title: "Notice",
      desc: <div>This is an alert.</div>,
      important: false,
    },
  ],
};
