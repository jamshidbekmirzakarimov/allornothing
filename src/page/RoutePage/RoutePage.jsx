import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Children from "../Children/Children";
import Sale from "../Sale/Sale";
import Collection from "../Collection/Collection";
const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="/home" element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/men/:id" element={<Men/>} />
          <Route path="/women/:id" element={<Women/>} />
          <Route path="/children/:id" element={<Children/>} />
          <Route path="/sale/:id" element={<Sale/>} />
          <Route path="/collection/:id" element={<Collection/>} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutePage;
