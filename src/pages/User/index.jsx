import React, { useState } from "react";
import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/User";

const User = ({
  toggleProfile,
  toggleSidebar,
  setToggleProfile,
  setToggleSidebar,
}) => {
  return (
    <div>
      <div>
        <div className="md:hidden">
          <Navbar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        </div>
        <div className="md:flex">
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
          <div className="flex flex-col w-full min-h-screen bg-slate-300">
            <Profile toggleProfile={toggleProfile} />
            <div>
              <Breadcrumb />
              <div>
                <Main />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
