import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Article from "./Article/Article";

const Layout = () => {
  return (
    <>
        <div>
        <Header />
        <Outlet />
        <Article/>
        {/* <Footer /> */}
        </div>
    </>
  );
};

export default Layout;
