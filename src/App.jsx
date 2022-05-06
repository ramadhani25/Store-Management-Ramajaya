import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  User,
  Product,
  Supplier,
  Category,
  Customer,
  NotFound,
} from "./pages";
import "./assets/custom.css";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route
        path="/user"
        element={
          <User
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route
        path="/product"
        element={
          <Product
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route
        path="/supplier"
        element={
          <Supplier
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route
        path="/category"
        element={
          <Category
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route
        path="/customer"
        element={
          <Customer
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            toggleProfile={toggleProfile}
            setToggleProfile={setToggleProfile}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
