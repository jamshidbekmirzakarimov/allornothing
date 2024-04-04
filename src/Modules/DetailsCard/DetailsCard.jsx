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
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Card from "../../constants/Card/Card";
import { useState } from "react";
import SectionName from "../../constants/SectionName/SectionName";
import AllProduct from "../AllProduct/AllProduct";
import { FaHeart } from "react-icons/fa";

const DetailsCard = () => {
  const { id } = useParams();
  var scrollingContainer = document.documentElement || document.body;

// Scroll to the top
scrollingContainer.scrollTop = 0;

  // Find the product with matching id
  const product = Product.find((product) => String(product.id) === id);
  console.log(product, "qale");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [reload, setReload] = useState(false);
  const likeCheck = () => {
    const newdata = JSON?.parse(localStorage?.getItem("like"));
    return newdata?.filter((item) => item === product.id).length > 0;
  };

  function addTolike() {
    setReload((prev) => !prev);
    let storedLike = JSON.parse(localStorage.getItem("like")) || [];
    storedLike.push(product.id);
    localStorage.setItem("like", JSON.stringify(storedLike));
    toast.success("Add to like ");
  }

  function removeTolike() {
    setReload((prev) => !prev);
    let storedLike = JSON.parse(localStorage.getItem("like")) || [];
    const removData = storedLike?.filter((item) => item !== product.id);
    localStorage?.setItem("like", JSON?.stringify(removData));
  }

  // Add to Basket
  const cartCheck = () => {
    const newdata = JSON?.parse(localStorage?.getItem("value"));
    return newdata?.filter((item) => item === product.id).length > 0;
  };

  function addTocart() {
    setReload((prev) => !prev);
    let storedCart = JSON.parse(localStorage.getItem("value")) || [];
    storedCart.push(product.id);
    localStorage.setItem("value", JSON.stringify(storedCart));
    if (product.id) {
      message.success("Siz kashelokka mahsulot qo'shdingiz!");
    } else {
    }
  }

  function removeTocart() {
    setReload((prev) => !prev);
    let storedCart = JSON.parse(localStorage.getItem("value")) || [];
    const removData = storedCart?.filter((item) => item !== product.id);
    localStorage?.setItem("value", JSON?.stringify(removData));
  }

  return (
    <>
      <section className="DetailsCard pt-[2px] border-b-[1px] pb-[20px] border-[#333333]">
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
          <div className="flex max-[800px]:flex-col gap-[84px] max-[800px]:gap-[30px] w-full">
            <div className="w-[600px] max-[800px]:w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {product.image.map((items) => (
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full h-[650px] max-[800px]:h-[600px] bg-transparent max-[450px]:h-[500px] max-[]">
                      <div className="relative flex items-center justify-center bg-[#fff] w-full max-[800px]:w-full h-[600px] max-[800px]:h-[550px] max-[450px]:h-[450px] rounded-[24px]">
                        <img width={480} height={480} src={items} alt="" />

                        <FaHeart
                          onClick={() =>
                            likeCheck() ? removeTolike() : addTolike()
                          }
                          size={20}
                          className="absolute top-[17px] right-[16px] cursor-pointer"
                          color={likeCheck() ? "red" : "#666666"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="text-white pt-[30px] max-[800px]:p-0 w-full flex flex-col justify-between">
              <div>
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
                        {product.price} <span>uzs</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-[14px] leading-[18px] text-[#999999]">
                    <del>{product.delprice}</del> <span>uzs</span>
                  </p>
                </div>
                <div className="roboto flex items-center justify-between pb-[32px] mb-[32px] border-b-[1px] border-[#262626] max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-[16px]">
                  <div>
                    <p className="text-[16px] font-medium leading-[19px] mb-[6px]">
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
                  <div>
                    <p className="text-[16px] font-medium leading-[19px] mb-[6px]">
                      Size:
                    </p>
                    <ul className="flex gap-[16px]">
                      <li className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-[#666666] rounded-[8px]">
                        39
                      </li>
                      <li className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-[#666666] rounded-[8px]">
                        40
                      </li>
                      <li className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-[#666666] rounded-[8px]">
                        41
                      </li>
                      <li className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-[#666666] rounded-[8px]">
                        42
                      </li>
                      <li className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-[#666666] rounded-[8px]">
                        43
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full max-[800px]:mb-[40px] max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-[8px]">
                  <button className="w-[49%] max-[550px]:w-full border-[1px] border-[#F6CE3C] text-[#f6ce3c] duration-300 font-semibold text-[16px] leading-[21px] uppercase pt-[19px] pb-[18px] rounded-[12px] hover:bg-[#F6CE3C] hover:text-black ">
                    BUY NOW
                  </button>
                  <button
                    onClick={() => (cartCheck() ? removeTocart() : addTocart())}
                    className={`w-[49%] border-[1px] max-[550px]:w-full  border-[#F6CE3C] text-[#f6ce3c] duration-300 font-semibold text-[16px] leading-[21px] uppercase pt-[19px] pb-[18px] rounded-[12px] hover:bg-[#F6CE3C] hover:text-black  ${
                      cartCheck() ? "bg-[#F6CE3C] text-black" : ""
                    } `}
                  >
                    add to cart
                  </button>
                </div>
              </div>
              <div className="w-full h-[200px] bg-[#262626] mb-[25px] rounded-[12px] relative">
                <div className="py-[22px] px-[20px]">
                  <div className="flex gap-[16px]">
                    <div
                      className={`z-10 pb-[10px] cursor-pointer font-bold leading-[19px] ${
                        activeTab === 0
                          ? "border-b-[2px] border-[#fff] text-white"
                          : "text-[#999999]"
                      }`}
                      onClick={() => handleTabClick(0)}
                    >
                      About
                    </div>
                    <div
                      className={`z-10 pb-[10px] cursor-pointer font-bold leading-[19px] ${
                        activeTab === 1
                          ? "border-b-[2px] border-[#fff] text-white"
                          : "text-[#999999]"
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      Delivery
                    </div>
                  </div>
                  <div className="mt-[16px] h-[100px] overflow-y-auto">
                    {activeTab === 0 && (
                      <div className="roboto">
                        Adidas YEZZEY 700 Akula terisidan qilingan.Yurish juda
                        qulay kiysiz ozi yuradi Tunda Yonadi. Siz kutgan
                        krossovkalar. Jigarrang va bej rangli teridan ishlangan,
                        Adidas kompaniyasining Forum Buckle Low krossovkalari
                        tasodifiy past
                      </div>
                    )}
                    {activeTab === 1 && <div>Tab 2 content</div>}
                  </div>
                </div>
                <div className="absolute w-full h-[1px] bg-[#33333380] top-[52px] "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllProduct />
    </>
  );
};

export default DetailsCard;
