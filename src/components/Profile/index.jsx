import React from "react";

const Profile = ({ toggleProfile }) => {
  return (
    <>
      <div className={`relative md:w-full`}>
        <div
          className={`w-full absolute bg-slate-400 transition-all md:h-auto md:static ${
            toggleProfile ? "h-14" : "h-0"
          }`}
        >
          <div
            className={`flex justify-end md:flex ${
              toggleProfile ? "block" : "hidden"
            }`}
          >
            <div className="mr-4">
              <div className="rounded-full overflow-hidden w-9">
                <img src="https://picsum.photos/200" alt="" />
              </div>
            </div>
            <div>
              <p>Ramadhani Asrofa Kemal</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
