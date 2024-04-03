import React from "react";
import SectionName from "../../constants/SectionName/SectionName";
import Newproduct6 from "../../assets/images/newproduct6.png";
import Like from "../../assets/svg/like.svg";
import Card from "../../constants/Card/Card";
import Product from "../../api/api";
const NewProductCard = ({ action }) => {
  return (
    <section className="mt-[80px]">
      <div className="container">
        <SectionName>News product</SectionName>
        <ul className="flex w-full gap-y-[48px] justify-between  flex-wrap">
          {Product.slice(0, 8).map((product, index) => (
            <Card className={"w-full max-[550px]:w-[200px] max-[450px]:w-[160px] max-[360px]:w-full"}
              key={index}
              id={product.id}
              action={product.action}
              image={product.image[0]}
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
