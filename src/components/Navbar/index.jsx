import React from "react";
import { FiMenu, FiMoreVertical } from "react-icons/fi";

const Navbar = ({
  toggleSidebar,
  setToggleSidebar,
  toggleProfile,
  setToggleProfile,
}) => {
  return (
    <div className="flex tracking-widest font-semibold justify-between text-center bg-secondary text-accent text-xl p-4">
      <div className="flex">
        <button
          className="px-2"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <FiMenu />
        </button>
        <div>RAMAJAYA</div>
      </div>
      <div>
        <button onClick={() => setToggleProfile(!toggleProfile)}>
          <FiMoreVertical />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
