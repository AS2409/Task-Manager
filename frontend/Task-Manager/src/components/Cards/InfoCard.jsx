import React from "react";

const InfoCard = ({ label, value, color }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm md:text-[20px] font-bold ${color}`}>
        {value}
      </span>
      <span className="text-sm md:text-[15px] text-gray-600">
        {label}
      </span>
    </div>
  );
};

export default InfoCard;
