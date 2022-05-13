import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddUser";

const AddUser = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/user", title: "User" },
  ];
  return (
    <div>
      <Navbar />
      <div className="md:flex">
        <Sidebar />
        <div className="main-content">
          <Profile />
          <Breadcrumb dataPath={dataPath} />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
