import React from "react";
import ArrowLeft from "../../assets/svg/arrowleft.svg";
import { Link, useParams } from "react-router-dom";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./DetailsCard.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NewProduct from "../../assets/images/branjlet.png";
import Product from "../../api/api";
import Like from "../../assets/svg/like.svg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Card from "../../constants/Card/Card";
const DetailsCard = () => {
  const { id } = useParams();

  // Find the product with matching id
  const product = Product.find((product) => String(product.id) === id);
  console.log(product, "qale");
  return (
    <>
      <section className="DetailsCard pt-[2px]">
        <div className="container">
          <div className="mb-[59px]">
            <Link className="mb-[40px]" to="/">
              <div className="flex items-center">
                <img src={ArrowLeft} alt="" />{" "}
                <h2 className="uppercase font-extrabold text-[#E6E6E5] text-[16px] leading-[21px]">
                  {product.title}
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex gap-[84px]">
            <div className="w-[600px] ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {product.image.map((items) => (
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-[600px] h-[650px] bg-transparent">
                      <div className="relative flex items-center justify-center bg-[#fff] w-[600px] h-[600px] rounded-[24px]">
                        <img width={480} height={480} src={items} alt="" />
                        <img
                          className="cursor-pointer absolute top-[20px] right-[20px]"
                          src={Like}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="text-white pt-[30px] w-full">
              <h3 className="text-[32px] leading-[38px] font-bold max-w-[300px] mb-[13px]">
                {product.title}
              </h3>
              <div className="flex items-center gap-[16px] mb-[32px]">
                <div className="bg-[#FB1919] inline-block gap-[5px] py-[8px] px-[16px] rounded-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <p className="font-semibold text-[16px] leading-[21px]">
                      {product.action}
                    </p>{" "}
                    <div className="w-[4px] h-[4px] rounded-[50%] bg-[#0F0F0F]"></div>
                    <p className="font-semibold text-[16px] leading-[21px]">
                      {product.price}{" "}
                    </p>
                  </div>
                </div>
                <p className="font-normal text-[14px] leading-[18px] text-[#999999]">
                  <del>{product.delprice}</del>
                </p>
              </div>
              <div className="roboto flex items-center justify-between">
                <div>
                  <p className="text-[16px] font-medium leading-[19px]">
                    Color:
                  </p>
                  <ul className="flex items-center">
                    <li className="flex items-center w-[28px] h-[28px] rounded-[50%] bg-[#BD00FF] me-[22px]"></li>
                    <li className="flex items-center w-[28px] h-[28px] rounded-[50%] bg-[#4785FF] me-[22px] after:content-[' '] after:w-[1px] after:h-[12px] after:block after:rounded-[1px] after:bg-[#333333] after:ms-[-11px]"></li>
                    <li className="flex items-center w-[28px] h-[28px] rounded-[50%] bg-[#B2F91B] me-[22px] after:content-[' '] after:w-[1px] after:h-[12px] after:block after:rounded-[1px] after:bg-[#333333] after:ms-[-11px]"></li>
                    <li className="flex items-center w-[28px] h-[28px] rounded-[50%] bg-[#333333] me-[22px] after:content-[' '] after:w-[1px] after:h-[12px] after:block after:rounded-[1px] after:bg-[#333333] after:ms-[-11px]"></li>
                    <li className="flex items-center w-[28px] h-[28px] rounded-[50%] bg-[#F4F5F5] me-[22px] after:content-[' '] after:w-[1px] after:h-[12px] after:block after:rounded-[1px] after:bg-[#333333] after:ms-[-11px]"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {Product.map((product, index) => (
              <Card
                key={index}
                action={product.action}
                image={product.image}
                title={product.title}
                price={product.price}
                delprice={product.delprice}
                color={product.color}
              />
            ))} */}
      </section>
    </>
  );
};

export default DetailsCard;
