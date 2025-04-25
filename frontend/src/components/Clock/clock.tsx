import { useEffect, useState } from "react";
import React from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-xl text-gray-600 text-center p-4">
        {time.toLocaleTimeString()}
      </div>
    </>
  );
};

export default Clock;
