import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface DetailCardProps<T> {
  title: ReactNode;
  desc: string;
  items: T[];
  keyExtractor: (item: T) => string;
  leftRender: (item: T) => ReactNode;
  rightRender: (item: T) => ReactNode;
}

function DetailCard<T>({
  title,
  desc,
  items,
  keyExtractor,
  leftRender,
  rightRender,
}: DetailCardProps<T>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={keyExtractor(item)}
              className="flex items-center justify-between"
            >
              <div>{leftRender(item)}</div>
              <div>{rightRender(item)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default DetailCard;
