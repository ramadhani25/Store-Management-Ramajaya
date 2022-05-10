import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddUser";

const AddUser = ({
  toggleProfile,
  toggleSidebar,
  setToggleProfile,
  setToggleSidebar,
}) => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/user", title: "User" },
  ];
  return (
    <div>
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        toggleProfile={toggleProfile}
        setToggleProfile={setToggleProfile}
      />
      <div className="md:flex">
        <Sidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="main-content">
          <Profile toggleProfile={toggleProfile} />
          <Breadcrumb dataPath={dataPath} />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
