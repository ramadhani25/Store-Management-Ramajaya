import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div>
      <hr className="hidden md:block" />
      <div className="bg-white rounded-md p-5 m-5 md:m-auto md:rounded-none">
        <ol className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li className="px-2">Dashboard</li>
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
