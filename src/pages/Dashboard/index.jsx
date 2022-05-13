import { useNavigate } from "react-router-dom";

// Components
import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/Dashboard";

const Dashboard = () => {
  // States & Variables
  const navigate = useNavigate();
  const dataPath = [{ path: "/", title: "Dashboard" }];

  if (!JSON.parse(localStorage.getItem("token"))) {
    navigate("/login");
  }

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

export default Dashboard;
