import React from "react";

type EmployeeCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="flex items-center justify-around bg-blue-900 p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-300">{role}</p>
      </div>
      <button className="bg-white text-black p-2 rounded-sm">
        Edit Profile
      </button>
    </div>
  );
};

export default EmployeeCard;
