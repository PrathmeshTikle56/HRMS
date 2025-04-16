import React from "react";

interface ButtonProps {
  name: string;
  onHandleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onHandleClick }) => {
  return (
    <button
      onClick={onHandleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
    >
      {name}
    </button>
  );
};

export default Button;
