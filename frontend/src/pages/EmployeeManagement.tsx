import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import { UserPlus } from "lucide-react";

const EmployeeManagement = () => {
  const headers = ["profile", "id", "name", "role", "doj", "dept", "actions"];
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("/employeeTable.json")
      .then((res) => res.json())
      .then((data) => setEmployeeData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(employeeData);
  return (
    <>
      <div className="p-2">
        <h1 className=" flex flex-wrap font-bold">
          DashBoard/Employee Management
        </h1>
        <div className="flex justify-end">
          <button className="p-2 flex justify-between items-center gap-2 bg-black text-white rounded cursor-pointer">
            Add Employee <UserPlus size={16} />
          </button>
        </div>
        <Table headers={headers} data={employeeData} />
      </div>
    </>
  );
};

export default EmployeeManagement;
