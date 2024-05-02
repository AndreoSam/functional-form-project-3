import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Error404 from "../layout/Error/Error404";
import AddProduct from "../components/Product/AddProduct";
import ViewProduct from "../components/Product/ViewProduct";
import SingleProduct from "../components/Product/SingleProduct";
import EditProduct from "../components/Product/EditProduct";
import Registration from "../components/registration/Registration";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<AddProduct />} />
        <Route path="view" element={<ViewProduct />} />
        <Route path="singpro/:id" element={<SingleProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="*" element={<Error404 />} />
        <Route path="reg" element={<Registration />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
