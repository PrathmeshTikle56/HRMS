import React, { useState, useEffect } from "react";
import EmployeeCard from "../components/EmployeeCards";
import QuickBtnData from "../assets/data/QuickActionsBtn.json";
import Button from "../components/common/ButtonComp";
import HolidayCalendar from "../components/Calendar/Calendar";
import Clock from "../components/Clock/clock";
import LeaveProgressBar from "../components/LeaveProgressBar/LeaveProgressBar";
import { LeaveType } from "../components/LeaveProgressBar/LeaveProgressBar";
import { Calendar } from "lucide-react";

const EmployeeDashboard = () => {
  const leaveStats: LeaveType[] = [
    { type: "Sick Leave", used: 4, total: 10 },
    { type: "Casual Leave", used: 2, total: 5 },
    { type: "Annual Leave", used: 8, total: 15 },
  ];

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl p-2">
            {" "}
            Welcome To Portal , Ankit{" "}
          </h1>
          <Clock />
        </div>

        <EmployeeCard
          imageUrl=""
          name="Ankit Sharma"
          role="Frontend Developer"
        />
        <div>
          <h2 className="text-xl font-bold p-2">{QuickBtnData.label}</h2>

          <div className="flex flex-wrap gap-3">
            {Object.entries(QuickBtnData.content[0]).map(([key, label]) => (
              <Button
                name={label}
                key={key}
                cls="bg-gray-300 hover:bg-gray-400 text-black cursor-pointer font-semibold py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline min-w-[140px] text-center"
                onClick={() => {
                  console.log("xyz");
                }}
              ></Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap w-full my-5">
          <div className="w-full md:w-1/4 p-2">
            <h1 className="text-lg font-bold p-2">Leave Summary Stats</h1>
            <LeaveProgressBar leaveData={leaveStats} />
          </div>
          <div className="w-full md:w-1/4 ">
            <HolidayCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
