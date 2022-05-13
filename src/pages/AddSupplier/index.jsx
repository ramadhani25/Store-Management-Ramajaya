import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddSupplier";

const AddSupplier = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/supplier", title: "Supplier" },
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

export default AddSupplier;
