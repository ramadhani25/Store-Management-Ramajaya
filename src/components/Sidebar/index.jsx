import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Constant
import { menuItem } from "constants/menuItem";

// Assets
import { icon } from "assets/icon";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
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
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                {icon.fix}
              </button>
            </div>
            <div className="px-6 pb-4 pt-10 text-xs font-extralight  text-accent bg-primary">
              NAVIGATION
            </div>
            <div>
              {menuItem.map((item, itemIdx) => (
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
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <span className="mr-1">{icon.cglogout}</span> Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
