"use client";

import { AdminDashboard } from "@/components/dashboard";
import { useState } from "react";
import { DASHBOARD_ROLE } from "@/lib/types";

export default function Page() {
  const [role, setRole] = useState<DASHBOARD_ROLE>("management");

  return (
    <>
      <AdminDashboard role={role} setRole={setRole} />
    </>
  );
}
