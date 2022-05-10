import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ dataPath }) => {
  return (
    <div>
      <hr className="hidden md:block" />
      <div className="bg-white rounded-md p-5 m-5 md:m-auto md:rounded-none">
        <ol className="flex">
          {dataPath.map((path, pathIdx) => (
            <li key={pathIdx} className="pr-1 text-xs md:text-sm">
              <Link to={path.path}>{path.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
