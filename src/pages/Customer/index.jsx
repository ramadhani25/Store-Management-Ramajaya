import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/Customer";

const Customer = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/customer", title: "Customer" },
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

export default Customer;
