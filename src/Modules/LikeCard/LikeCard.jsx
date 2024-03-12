import React, { useState } from "react";
import Products from "../../api/api";
import Card from "../../constants/Card/Card";

const LikeCard = () => {
  let storedData =
    localStorage?.getItem("like") !== null
      ? JSON.parse(localStorage.getItem("like"))
      : [];

  const filterData = () => {
    let data = [];
    for (let i = 0; i < storedData?.length; i++) {
      const element = storedData[i];
      for (let j = 0; j < Products.length; j++) {
        const element2 = Products[j];
        if (element2?.id === element) {
          data.push(element2);
        }
      }
    }
    return data;
  };

  return (
    <section className="wrapper like-container">
     <ul className="flex flex-wrap justify-between w-full gap-y-[30px]">
     {filterData().length > 0 ? (
        filterData().map((data, index) => (
          <Card
            key={index}
            id={data.id}
            action={data.action}
            image={data.image[0]}
            title={data.title}
            price={data.price}
            delprice={data.delprice}
            color={data.color}
          />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white">Hech qanday like qo'shganiz yo'q!</div>
      )}
     </ul>
    </section>
  );
};

export default LikeCard;