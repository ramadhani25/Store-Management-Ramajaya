import React from "react";

const Profile = ({ toggleProfile }) => {
  return (
    <div className={`relative md:w-full`}>
      <div
        className={`w-full absolute px-8 py-4 bg-white transition-all md:h-auto md:py-4 md:static ${
          toggleProfile ? "h-auto" : "h-0 py-0"
        }`}
      >
        <div
          className={`flex justify-end items-center md:flex ${
            toggleProfile ? "block" : "hidden"
          }`}
        >
          <div className="mr-3">
            <div className="rounded-full overflow-hidden w-8 h-8">
              <img src="https://picsum.photos/200" alt="" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Ramadhani AK</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
