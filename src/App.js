import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Categories from "./pages/backOffice/categories/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path='/backoffice/categories' element={<Categories/>} /> 
      </Route>
    </Routes>
  );
}

export default App;