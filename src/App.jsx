import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { PrivateRoute } from "components";

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

// Assets
import "./assets/custom.css";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="product" element={<Product />} />
        <Route path="supplier" element={<Supplier />} />
        <Route path="category" element={<Category />} />
        <Route path="customer" element={<Customer />} />

        <Route path="user/addUser" element={<AddUser />} />
        <Route path="product/addProduct" element={<AddProduct />} />
        <Route path="supplier/addSupplier" element={<AddSupplier />} />
        <Route path="category/addCategory" element={<AddCategory />} />
        <Route path="customer/addCustomer" element={<AddCustomer />} />

        <Route path="user/EditUser/:id" element={<EditUser />} />
        <Route path="product/EditProduct/:id" element={<EditProduct />} />
        <Route path="supplier/EditSupplier/:id" element={<EditSupplier />} />
        <Route path="category/EditCategory/:id" element={<EditCategory />} />
        <Route path="customer/EditCustomer/:id" element={<EditCustomer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
