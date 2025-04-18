import React from "react";

interface ButtonProps {
  name: string;
  onHandleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onHandleClick }) => {
  return (
    <button
      onClick={onHandleClick}
      className="bg-[#253D90] hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
    >
      {name}
    </button>
  );
};

export default Button;
