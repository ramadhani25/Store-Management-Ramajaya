import React from "react";
import { Link } from "react-router-dom";

// Assets
import NotFoundLogo from "assets/404.svg";
import { icon } from "assets/icon";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center bg-base">
      <img src={NotFoundLogo} alt="" className="w-1/2 md:w-1/3" />
      <Link to="/" className="text-sm mt-5 font-medium flex items-center">
        <span className="mr-1">{icon.biarrowback}</span> Go Back
      </Link>
    </div>
  );
};

export default NotFound;
