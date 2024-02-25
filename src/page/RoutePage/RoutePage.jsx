import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home";
import Details from "../Details/Details";
const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="/home" element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details/>} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutePage;
