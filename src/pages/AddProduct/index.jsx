import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddProduct";

const AddProduct = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/product", title: "Product" },
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

export default AddProduct;
