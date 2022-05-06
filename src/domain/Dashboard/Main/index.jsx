import React from "react";
import { CardDashboard, ContentTitle } from "components";

const Main = () => {
  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 p-5">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
    </div>
  );
};

export default Main;
