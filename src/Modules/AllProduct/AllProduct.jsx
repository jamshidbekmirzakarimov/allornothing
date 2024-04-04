import React, { useState, useRef } from "react";
import SectionName from "../../constants/SectionName/SectionName";
import Card from "../../constants/Card/Card";
import Product from "../../api/api";

const AllProduct = () => {
  const [add, setAdd] = useState(4);
  const cardListRef = useRef(null);

  const addFunc = () => {
    setAdd(add + 4);

    // // Scroll to the end of the card list
    // cardListRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <>
      <section className="pt-[80px]">
        <div className="container">
          <SectionName>News product</SectionName>
          <ul
            ref={cardListRef}
            className="grid grid-cols-4grid grid-cols-4 gap-x-[10px] gap-y-[48px] max-[800px]:grid-cols-3 max-[500px]:grid-cols-2 "
          >
            {Product.slice(0, add).map((product, index) => (
              <Card
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
          {add < Product.length && (
            <button
              onClick={addFunc}
              className="w-full bg-[#262626] text-[16px] pt-[13px] pb-[13px] mt-[48px] rounded-[8px] leading-[19px] text-[#F6CE3C]"
            >
              See all
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default AllProduct;