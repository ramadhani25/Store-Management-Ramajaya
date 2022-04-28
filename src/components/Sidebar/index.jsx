import React from "react";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <>
      <div
        className={`absolute h-screen bg-slate-600 top-0 left-0 z-50 transition-all md:w-2/5 md:static ${
          toggleSidebar ? "w-2/5" : "w-0"
        }`}
      >
        <div className={`${toggleSidebar ? "block" : "hidden"} md:block`}>
          <div>
            <div className="flex justify-between text-center bg-slate-800 text-white text-xl">
              <div>LOGO</div>
              <button
                className="bg-red-600 px-2 md:hidden"
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                X
              </button>
            </div>
          </div>
          <div className="text-center p-6 bg-slate-600 text-white">
            Navigation
          </div>
          <div className="p-5 bg-slate-600 text-white">Menu</div>
          <div className="p-5 bg-slate-600 text-white">Menu</div>
          <div className="p-5 bg-slate-600 text-white">Menu</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
