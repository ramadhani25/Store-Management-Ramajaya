import React from "react";
import { icon } from "assets/icon";

const Navbar = ({
  toggleSidebar,
  setToggleSidebar,
  toggleProfile,
  setToggleProfile,
}) => {
  return (
    <div className="flex tracking-widest font-semibold justify-between text-center bg-secondary text-accent text-xl p-4 md:hidden">
      <div className="flex">
        <button
          className="px-2"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          {icon.fimenu}
        </button>
        <div>RAMAJAYA</div>
      </div>
      <div>
        <button onClick={() => setToggleProfile(!toggleProfile)}>
          {icon.fimorevertical}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
