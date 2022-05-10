import React from "react";

const CardDashboard = ({ count, title }) => {
  return (
    <div className="bg-accent py-5 px-8 rounded-md">
      <p className="flex items-center text-lg text-gray-700">
        <span className="mr-5 text-2xl font-semibold text-gray-900">
          {count}
        </span>{" "}
        {title}
      </p>
    </div>
  );
};

export default CardDashboard;
