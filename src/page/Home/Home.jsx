import React from "react";
import { AllMenu, ByBrend, Hero, NewProduct, NewProductCard } from "../../Modules";

const Home = () => {
  return (
    <>
      <Hero />
      <AllMenu/>
      <NewProduct />
      <NewProductCard/>
      <ByBrend/>
    </>
  );
};

export default Home;
