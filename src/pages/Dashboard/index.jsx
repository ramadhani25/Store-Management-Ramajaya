import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/Dashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = ({
  toggleProfile,
  toggleSidebar,
  setToggleProfile,
  setToggleSidebar,
}) => {
  const navigate = useNavigate();
  const dataPath = [{ path: "/", title: "Dashboard" }];

  // console.log(localStorage.getItem("token"));
  if (!JSON.parse(localStorage.getItem("token"))) {
    navigate("/login");
  }

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

export default Dashboard;
