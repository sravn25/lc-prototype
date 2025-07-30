import { DASHBOARD_ROLE } from "@/lib/types";
import {
  BaggageClaimIcon,
  DollarSignIcon,
  FactoryIcon,
  LucideIcon,
  PackageIcon,
  ShieldQuestionIcon,
  UserRoundIcon,
} from "lucide-react";

type Entry = {
  title: string;
  amount: string;
  dir: "up" | "down";
  sub: string;
  icon: LucideIcon;
};

export const cardData: Record<DASHBOARD_ROLE, Entry[]> = {
  management: [
    {
      title: "Total Monthly Revenue",
      amount: "$215,301",
      dir: "up",
      sub: "+12% from last month",
      icon: DollarSignIcon,
    },
    {
      title: "Torn & Stained Amount",
      amount: "13",
      dir: "up",
      sub: "+13 from last month",
      icon: ShieldQuestionIcon,
    },
    {
      title: "Monthly CO/DO Rate",
      amount: "98%",
      dir: "down",
      sub: "-2% from last month",
      icon: PackageIcon,
    },
    {
      title: "Active Customer Count",
      amount: "98",
      dir: "up",
      sub: "+3 from last month",
      icon: UserRoundIcon,
    },
  ],
  operation: [
    {
      title: "Torn & Stained Amount",
      amount: "13",
      dir: "up",
      sub: "+13 from last month",
      icon: ShieldQuestionIcon,
    },
    {
      title: "Monthly CO/DO Rate",
      amount: "98%",
      dir: "down",
      sub: "-2% from last month",
      icon: PackageIcon,
    },
    {
      title: "Input / Output",
      amount: "310 / 210",
      dir: "down",
      sub: "100 linen on hand",
      icon: FactoryIcon,
    },
    {
      title: "Trolley Possession",
      amount: "42%",
      dir: "down",
      sub: "32 is out for delivery",
      icon: BaggageClaimIcon,
    },
  ],
};
