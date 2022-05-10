import React from "react";

const ContentTitle = ({ title }) => {
  return (
    <div>
      <div className="p-5">
        <h1 className="font-bold text-gray-700 pb-2">{title.textTitle}</h1>
        <p className="text-gray-500 text-sm">{title.desc}</p>
      </div>
      <hr />
    </div>
  );
};

export default ContentTitle;
