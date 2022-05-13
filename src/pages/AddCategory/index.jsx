import { Navbar, Sidebar, Profile, Breadcrumb } from "components";
import { Main } from "domain/AddCategory";

const AddCategory = () => {
  const dataPath = [
    { path: "/", title: "Home /" },
    { path: "/category", title: "Category" },
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

export default AddCategory;
