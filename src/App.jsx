import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import {
  Dashboard,
  User,
  Product,
  Supplier,
  Category,
  Customer,
  AddUser,
  AddProduct,
  AddSupplier,
  AddCategory,
  AddCustomer,
  EditUser,
  EditProduct,
  EditSupplier,
  EditCategory,
  EditCustomer,
  NotFound,
  Login,
} from "./pages";

// Utils
import PrivateRoute from "Utils/PrivateRoute";

// Assets
import "./assets/custom.css";

const App = () => {
  // States
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<PrivateRoute />}>
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
          path="user"
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
          path="user/addUser"
          element={
            <AddUser
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="user/EditUser/:id"
          element={
            <EditUser
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="product"
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
          path="product/addProduct"
          element={
            <AddProduct
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="product/EditProduct/:id"
          element={
            <EditProduct
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="supplier"
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
          path="supplier/addSupplier"
          element={
            <AddSupplier
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="supplier/EditSupplier/:id"
          element={
            <EditSupplier
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="category"
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
          path="category/addCategory"
          element={
            <AddCategory
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="category/EditCategory/:id"
          element={
            <EditCategory
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="customer"
          element={
            <Customer
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="customer/addCustomer"
          element={
            <AddCustomer
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="customer/EditCustomer/:id"
          element={
            <EditCustomer
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
