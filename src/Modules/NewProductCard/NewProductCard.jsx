import React from "react";
import SectionName from "../../constants/SectionName/SectionName";
import Newproduct6 from "../../assets/images/newproduct6.png";
import Like from "../../assets/svg/like.svg";
import Card from "../../constants/Card/Card";
import Product from "../../api/api"
const NewProductCard = ({ action }) => {
  return (
    <section className="mt-[80px]">
      <div className="container">
        <SectionName>News product</SectionName>
        <ul className="flex w-full gap-x-[12px] gap-y-[48px]  flex-wrap">
          {Product.map((product, index) => (
            <Card
              key={index}
              action={product.action}
              image={product.image}
              title={product.title}
              price={product.price}
              delprice={product.delprice}
              color={product.color}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewProductCard;
