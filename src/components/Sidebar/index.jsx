import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { handleSidebar } from "redux/ToggleButton";

// Library
import Swal from "sweetalert2";
import "animate.css";

// Constant
import { menuItem, menuItemAdmin } from "constants/menuItem";

// Assets
import { icon } from "assets/icon";

const Sidebar = () => {
  // States & Variables
  const [isAdmin] = useState(
    JSON.parse(localStorage.getItem("token")).tipe === "admin"
  );
  const navigate = useNavigate();
  // Redux
  const { toggleSidebar } = useSelector((state) => state.toggleButton);
  const dispatch = useDispatch();

  // Swal
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // Function
  const handleLogout = () => {
    Swal.fire({
      title: "Sign Out",
      text: "Are you sure want to sign out ?",
      icon: "warning",
      iconColor: "#EB5353",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#EB5353",
      showClass: {
        popup: "animate__animated animate__bounceIn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/login");
        Toast.fire({
          icon: "success",
          title: "Signed out successfully",
        });
      }
    });
  };

  return (
    <div className="bg-primary">
      <div
        onClick={() => dispatch(handleSidebar())}
        className={`w-screen h-screen bg-secondary/20 fixed top-0 left-0 z-40 md:hidden ${
          toggleSidebar ? "fixed" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed h-full bg-primary text-white top-0 left-0 z-50 transition-all md:w-64 md:static ${
          toggleSidebar ? "w-64" : "w-0"
        }`}
      >
        <div
          className={`${
            toggleSidebar ? "block" : "hidden"
          } md:block flex flex-col justify-between h-screen`}
        >
          <div>
            <div className="flex tracking-widest p-5 justify-between text-center font-semibold text-accent bg-secondary text-xl md:block">
              <div>RAMAJAYA</div>
              <button
                className="px-1 bg-accent text-primary rounded-md md:hidden"
                onClick={() => dispatch(handleSidebar())}
              >
                {icon.fix}
              </button>
            </div>
            <div className="px-6 pb-4 pt-10 text-xs font-extralight  text-accent bg-primary">
              NAVIGATION
            </div>
            <div>
              {isAdmin &&
                menuItemAdmin.map((item, itemIdx) => (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    className="px-6 py-3 text-sm tracking-wide flex items-center hover:bg-secondary"
                  >
                    <span className="mr-2">{item.icon}</span> {item.name}
                  </NavLink>
                ))}
              {!isAdmin &&
                menuItem.map((item, itemIdx) => (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    className="px-6 py-3 bg-primary text-sm tracking-wide flex items-center  hover:bg-secondary"
                  >
                    <span className="mr-2">{item.icon}</span> {item.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div
            className="px-6 py-3 bg-primary font-extralight text-sm text-accent tracking-wide flex items-center hover:bg-secondary cursor-pointer"
            onClick={handleLogout}
          >
            <span className="mr-1">{icon.cglogout}</span> Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
