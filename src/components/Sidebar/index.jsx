import React from "react";
import { NavLink } from "react-router-dom";
import { FiX, FiHome } from "react-icons/fi";
import "./sidebar.css";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const icon = {
    home: <FiHome />,
  };
  return (
    <div
      className={`absolute h-screen bg-primary text-white top-0 left-0 z-50 transition-all md:w-80 md:static ${
        toggleSidebar ? "w-64" : "w-0"
      }`}
    >
      <div className={`${toggleSidebar ? "block" : "hidden"} md:block`}>
        <div>
          <div className="flex tracking-widest p-5 justify-between text-center font-semibold text-accent bg-secondary text-xl md:block">
            <div>RAMAJAYA</div>
            <button
              className="px-1 bg-accent text-primary rounded-md md:hidden"
              onClick={() => setToggleSidebar(!toggleSidebar)}
            >
              <FiX />
            </button>
          </div>
        </div>
        <div className="px-6 pb-4 pt-10 text-xs font-extralight  text-accent bg-primary">
          NAVIGATION
        </div>
        <div>
          <NavLink
            to={"/"}
            className="px-6 py-3 bg-primary text-sm tracking-wide flex items-center hover:bg-secondary"
          >
            <span className="mr-2">{icon.home}</span> Dashboard
          </NavLink>
          <NavLink
            to={"/user"}
            className="px-6 py-3 bg-primary text-sm tracking-wide flex items-center hover:bg-secondary"
          >
            <span className="mr-2">{icon.home}</span> User
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
