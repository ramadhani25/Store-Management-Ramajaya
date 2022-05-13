import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  // States & Variables
  const auth = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });

  return auth ? <Outlet /> : <></>;
};

export default PrivateRoute;
