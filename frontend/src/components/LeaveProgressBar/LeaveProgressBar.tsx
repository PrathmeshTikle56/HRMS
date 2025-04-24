import React from "react";
export interface LeaveType {
  type: "Sick Leave" | "Casual Leave" | "Annual Leave";
  used: number;
  total: number;
}

interface LeaveProgressBarProps {
  leaveData: LeaveType[];
}

const getColor = (type: LeaveType["type"]) => {
  switch (type) {
    case "Sick Leave":
      return "bg-red-500";
    case "Casual Leave":
      return "bg-yellow-500";
    case "Annual Leave":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const LeaveProgressBar: React.FC<LeaveProgressBarProps> = ({ leaveData }) => {
  return (
    <div className="space-y-6 w-full  py-10 px-5 shadow-sm shadow-blue-950">
      {leaveData.map((leave, index) => {
        const percent = Math.min((leave.used / leave.total) * 100, 100);
        return (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{leave.type}</span>
              <span>
                {leave.used}/{leave.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${getColor(leave.type)}`}
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaveProgressBar;
