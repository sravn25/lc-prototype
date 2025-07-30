import React, { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

interface NoticeProps {
  title: string;
  desc: ReactNode;
  important: boolean;
}

const Notice = ({ title, desc, important = false }: NoticeProps) => {
  const variant = important ? "destructive" : "default";
  return (
    <Alert variant={variant}>
      {variant === "default" ? <CheckCircle2Icon /> : <AlertCircleIcon />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
};

export default Notice;
