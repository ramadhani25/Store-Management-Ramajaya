import React from "react";

const Navbar = ({
  toggleSidebar,
  setToggleSidebar,
  toggleProfile,
  setToggleProfile,
}) => {
  return (
    <>
      <div>
        <div className="flex justify-between text-center bg-slate-800 text-white text-xl">
          <div className="flex">
            <button
              className="bg-red-600 px-2"
              onClick={() => setToggleSidebar(!toggleSidebar)}
            >
              X
            </button>
            <div>LOGO</div>
          </div>
          <div>
            <button onClick={() => setToggleProfile(!toggleProfile)}>o</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
