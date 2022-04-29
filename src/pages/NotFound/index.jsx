import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
