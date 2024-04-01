import React, { useState } from "react";
import Products from "../../api/api";
import Info from "../../assets/svg/info.svg";

const BasketCard = () => {
  let storedData =
    localStorage?.getItem("value") !== null
      ? JSON.parse(localStorage.getItem("value"))
      : [];

  const [productData, setProductData] = useState(filterData());

  function filterData() {
    let data = [];
    for (let i = 0; i < storedData?.length; i++) {
      const element = storedData[i];
      for (let j = 0; j < Products.length; j++) {
        const element2 = Products[j];
        if (element2?.id === element) {
          data.push({ ...element2, quantity: 1 });
        }
      }
    }
    return data;
  }

  function handleIncrement(index) {
    const updatedData = [...productData];
    updatedData[index].quantity += 1;
    setProductData(updatedData);
  }

  function handleDecrement(index) {
    const updatedData = [...productData];
    if (updatedData[index].quantity > 1) {
      updatedData[index].quantity -= 1;
      setProductData(updatedData);
    }
  }

  function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < productData.length; i++) {
      const product = productData[i];
      total += product.price * product.quantity;
    }
    return total;
  }

  return (
    <section className="wrapper like-container">
      <ul className="flex justify-between">
        <div className="">
          {productData.length > 0 ? (
            productData.map((data, index) => (
              <div className="border-b-[1px] border-[#333333]  mb-[32px] pb-[10px]">
                <div
                  key={index}
                  className="flex w-[676px] max-[790px]:w-full min-h-[192px] gap-[32px] max-[500px]:gap-[10px]  last:mb-[0px] last:border-[0px]"
                >
                  <img
                    className="rounded-[16px]"
                    width={192}
                    height={192}
                    src={data.image[0]}
                    alt=""
                  />
                  <div className="w-full flex justify-between flex-col">
                    <div className="flex items-start justify-between w-full">
                      <div>
                        <h3 className="font-bold text-[20px] leading-[24px] text-[#F5F5F5] max-w-[224px] w-full mb-[12px]">
                          {data.title}
                        </h3>
                        <div className="flex items-center gap-[16px]">
                          <div className="flex items-center gap-[7px]">
                            <p className="roboto text-white font-medium max-[500px]:hidden">
                              Size:
                            </p>
                            <button className="flex items-center justify-center roboto w-[32px] h-[32px] rounded-[8px] bg-[#333333] text-white">
                              42
                            </button>
                          </div>
                          <div className="w-[1px] h-[16px] rounded-[1px] bg-[#333333]"></div>
                          <div className="flex items-center gap-[7px]">
                            <p className="roboto text-white font-medium max-[500px]:hidden">
                              Color:{" "}
                            </p>
                            <div className="w-[32px] h-[32px] rounded-[50%] border-[1px] border-[#265AD9] p-[4px]">
                              <div className="w-full h-full rounded-[50%] bg-[#265AD9]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="roboto text-white font-medium text-[20px] rotate-90 mt-[15px] cursor-pointer">
                        ...
                      </p>
                    </div>
                    <div className="flex items-center justify-between max-[790px]:flex-col max-[790px]:items-start gap-[10px]">
                      <div className="bg-[#FB1919] inline-block gap-[5px] py-[4px] px-[16px] rounded-[6px] max-[430px]:px-[5px]  max-[470px]:hidden">
                        <div className="flex items-center gap-[10px]">
                          <p className="font-medium text-[14px] leading-[21px] text-white">
                            {data.action}
                          </p>{" "}
                          <div className="w-[4px] h-[4px] rounded-[50%] bg-[#0F0F0F]"></div>
                          <p className="font-medium text-[14px] leading-[21px] text-white">
                            {data.price * data.quantity} <span>uzs</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <button
                          className="roboto text-[20px]```
rounded-[6px] text-[#BFBFBF] w-[32px] h-[28px] bg-[#333333]"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        <p className="roboto text-white ">{data.quantity}</p>
                        <button
                          className="roboto text-[20px] rounded-[6px] text-[#333333] w-[32px] h-[28px] bg-[#BFBFBF]"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
             
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FB1919] inline-block gap-[5px] py-[4px] px-[16px] rounded-[6px] max-[430px]:px-[5px] mt-[10px]">
                      <div className="flex items-center gap-[10px]">
                        <p className="font-medium text-[14px] leading-[21px] text-white">
                          {data.action}
                        </p>{" "}
                        <div className="w-[4px] h-[4px] rounded-[50%] bg-[#0F0F0F]"></div>
                        <p className="font-medium text-[14px] leading-[21px] text-white">
                          {data.price * data.quantity} <span>uzs</span>
                        </p>
                      </div>
                    </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Hech qanday like qo'shganiz yo'q!
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-[440px] h-[306px] rounded-[16px] bg-[#33333399] max-[1120px]:hidden">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <div className="flex items-center gap-[5px]">
                <p className="roboto text-white font-medium">Jami:</p>
                <div className="bg-[#BFBFBF] inline-block gap-[5px] py-[4px] px-[16px] rounded-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[4px] h-[4px] rounded-[50%] bg-[#0F0F0F]"></div>
                    <p className="font-medium text-[14px] leading-[21px] text-[#262626]">
                      {calculateTotalPrice()} <span>uzs</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-[16px] rounded-[1px] bg-[#333333]"></div>
              <div className="flex items-center gap-[7px]">
                <p className="roboto text-white font-medium">Soni:</p>
                <button className="flex items-center justify-center roboto w-[32px] h-[32px] rounded-[8px] bg-[#333333] text-white">
                  3
                </button>
              </div>
            </div>
            <button className="w-[320px] uppercase border-[1px] border-[#265AD9] text-[#F5F5F5] font-bold text-[16px] leading-[22px] pt-[17px] pb-[17px] rounded-[30px] mb-[8px]">
              Zood pay
            </button>
            <div className="flex items-center gap-[5px] mb-[8px]">
              <div className="w-[64px] h-[1px] bg-[#666666]"></div>
              <p className="uppercase text-[8px] leading-[11px] font-bold text-[#999999]">
                or
              </p>
              <div className="w-[64px] h-[1px] bg-[#666666]"></div>
            </div>
            <button className="w-[320px] uppercase bg-[#F6CE3C] text-[#0F0F0F] font-bold text-[16px] leading-[22px] pt-[17px] pb-[17px] rounded-[30px] mb-[8px]">
              clearance
            </button>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default BasketCard;
