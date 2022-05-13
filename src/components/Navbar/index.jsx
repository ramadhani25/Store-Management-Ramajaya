import React from "react";
import { icon } from "assets/icon";

// Redux
import { useDispatch } from "react-redux";
import { handleSidebar, handleProfile } from "redux/ToggleButton";

const Navbar = () => {
  // Redux
  const dispatch = useDispatch();

  return (
    <div className="flex tracking-widest font-semibold justify-between text-center bg-secondary text-accent text-xl p-4 md:hidden">
      <div className="flex">
        <button className="px-2" onClick={() => dispatch(handleSidebar())}>
          {icon.fimenu}
        </button>
        <div>RAMAJAYA</div>
      </div>
      <div>
        <button onClick={() => dispatch(handleProfile())}>
          {icon.fimorevertical}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
