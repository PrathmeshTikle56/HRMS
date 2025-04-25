import React from "react";
import { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  Icon: LucideIcon;
  borderColor?: string;
};

const DashboardCard = ({
  title,
  value,
  Icon,
  borderColor,
}: DashboardCardProps) => {
  return (
    <div
      className={`rounded-2xl shadow-md p-4 flex items-center ${borderColor} gap-4 border-1 cursor-pointer  hover:bg-white`}
    >
      <Icon className={`w-12 h-12`} />
      <div>
        <h4 className="text-lg font-semibold text-gray-600">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
