import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Lost from "../pages/Lost";
import Product from "../pages/Product";
import Login from "../pages/Login";
import About from "../pages/About";
import Events from "../pages/Events";

const index = () => {
  return (
    <HashRouter>
      <Routes>
        {/*<Route path="/" exact element={<About />} />*/}
        <Route path="/product/*" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/events/" element={<Events />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </HashRouter>
  );
};

export default index;
