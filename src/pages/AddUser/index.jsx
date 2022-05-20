import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/user", title: "User" },
  ];
  const auth = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.tipe !== "admin") {
      navigate("/");
    }
  });

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
