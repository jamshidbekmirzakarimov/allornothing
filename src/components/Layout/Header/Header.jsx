import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/svg/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import User from "../../../assets/svg/user.svg";
import Heart from "../../../assets/svg/heart.svg";
import Basket from "../../../assets/svg/basket.svg";
import Close from "../../../assets/svg/close.svg";
import ChangeLang from "../../ChangeLang/ChangeLang";
import Categorys from "../../../api/category";
import Profile from "../../../Modules/Profile/Profile";
import LikeCard from "../../../Modules/LikeCard/LikeCard";
import BasketCard from "../../../Modules/BasketCard/BasketCard";
import blackClose from "../../../assets/svg/black-close.svg";
import Menu from "../../../Modules/Menu/Menu";
const Header = () => {
  let storedData =
    localStorage?.getItem("like") !== null
      ? JSON.parse(localStorage.getItem("like"))
      : [];
  const filteredData = LikeCard(storedData);
  console.log(storedData, "filteredData qalemi");
  const [activeMenu, setActiveMenu] = useState(null);
  const [showComponent, setShowComponent] = useState(true);
  const headerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    // Check if the click event target is outside the Header component
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setShowComponent(false);
      setActiveMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleCloseButtonClick = () => {
    setActiveMenu(null);
    setShowComponent(false);
  };

  let like = localStorage.getItem("like");
  return (
    <header
      className="site-header py-[5px] w-full z-50 fixed top-0"
      ref={headerRef}
    >
      <div className="relative">
        <div className="container ">
          <div className="site-header-wrapper relative w-full p-[4px] flex items-center flex-col">
            <div className="bg-[#D9D9D9] pt-[4px] pb-[4px] ps-[4px] pe-[32px] max-[400px]:pe-[18px] flex items-center justify-between w-full rounded-[12px]">
              <div className="flex items-center h-full">
                <Link to="/">
                  <img className="pe-[20px] max-[450px]:pe-[0]" src={Logo} alt="logo" />
                </Link>

                <ul className="flex h-full max-[1050px]:hidden">
                  <li className="mt-[4px] p-0">
                    <Link
                      className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                        activeMenu === "men" ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick("men")}
                      tabIndex={0}
                    >
                      MEN
                    </Link>
                  </li>
                  <li className="mt-[4px] p-0">
                    <Link
                      className={`uppercase font-bold px-[24px] mt-[2px] border-s-[1px] border-[#BFBFBF] ${
                        activeMenu === "women" ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick("women")}
                    >
                      women
                    </Link>
                  </li>
                  <li className="mt-[4px] p-0">
                    <Link
                      className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                        activeMenu === "children" ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick("children")}
                    >
                      children
                    </Link>
                  </li>
                  <li className="mt-[4px] p-0">
                    <Link
                      className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                        activeMenu === "sale" ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick("sale")}
                    >
                      sale
                    </Link>
                  </li>
                  <li className="mt-[4px] p-0">
                    <Link
                      className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                        activeMenu === "collection" ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick("collection")}
                    >
                      collection
                    </Link>
                  </li>
                </ul>
                <button
                  className={`uppercase font-bold px-[24px] hidden max-[1050px]:block ${
                    activeMenu === "collection" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("menu")}
                >
                  MENU
                </button>
              </div>
              {activeMenu === "menu" ? (
                <button
                  className="border-s-[1px] ps-[21px] border-[#BFBFBF]"
                  onClick={handleCloseButtonClick}
                >
                  <img src={blackClose} alt="" />
                </button>
              ) : (
                <div className="flex items-center overflow-hidden">
                  <ChangeLang />
                  <div className="flex items-center bg-[#BFBFBF] h-[50px] w-[1px] mx-[36px] max-[1050px]:hidden"></div>
                  <div className="flex items-center">
                    <Link
                      className={`flex flex-col items-center`}
                      onClick={() => handleMenuClick("profile")}
                    >
                      <img className="pe-[16px]" src={User} alt="" />
                    </Link>
                    <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                    <div className="flex items-center flex-col pe-[16px] gap-[2px]">
                      <Link
                        className={`flex flex-col items-center `}
                        onClick={() => handleMenuClick("like")}
                      >
                        <img src={Heart} alt="" />
                        {storedData.length > 0 ? (
                          <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                    <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                    <div className="flex items-center flex-col gap-[2px]">
                      <Link
                        className={`flex flex-col items-center`}
                        onClick={() => handleMenuClick("basket")}
                      >
                        <img src={Basket} alt="" />
                        <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {activeMenu && (
              <div className="menu-items w-full  absolute -z-10 top-[50px] bg-[#1E1E1E] mt-[-15px] rounded-br-[12px] rounded-bl-[12px] pt-[45px]  pb-[32px]">
                {activeMenu === "men" && (
                  <div className="px-[56px]">
                    <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                      <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                        MEN
                      </h2>
                      <button
                        className="close-button border-s-[1px] border-[#333] ps-[21px] "
                        onClick={handleCloseButtonClick}
                      >
                        <img src={Close} alt="" />
                      </button>
                    </div>
                    <ul className="flex flex-wrap gap-[12px]">
                      {Categorys.map((category, index) => (
                        <Link to={`/men/${category?.title.toLowerCase()}`}>
                          <li
                            onClick={handleCloseButtonClick}
                            className={` ${
                              index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                            } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                          >
                            {category?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
                {activeMenu === "women" && (
                  <div className="px-[56px]">
                    <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                      <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                        women
                      </h2>
                      <button
                        className="close-button border-s-[1px] border-[#333] ps-[21px] "
                        onClick={handleCloseButtonClick}
                      >
                        <img src={Close} alt="" />
                      </button>
                    </div>
                    <ul className="flex flex-wrap gap-[12px]">
                      {Categorys.map((category, index) => (
                        <Link to={`/women/${category?.title.toLowerCase()}`}>
                          <li
                            onClick={handleCloseButtonClick}
                            className={` ${
                              index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                            } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                          >
                            {category?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
                {activeMenu === "children" && (
                  <div className="px-[56px]">
                    <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                      <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                        children
                      </h2>
                      <button
                        className="close-button border-s-[1px] border-[#333] ps-[21px] "
                        onClick={handleCloseButtonClick}
                      >
                        <img src={Close} alt="" />
                      </button>
                    </div>
                    <ul className="flex flex-wrap gap-[12px]">
                      {Categorys.map((category, index) => (
                        <Link to={`/children/${category?.title.toLowerCase()}`}>
                          <li
                            onClick={handleCloseButtonClick}
                            className={` ${
                              index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                            } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                          >
                            {category?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
                {activeMenu === "sale" && (
                  <div className="px-[56px]">
                    <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                      <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                        sale
                      </h2>
                      <button
                        className="close-button border-s-[1px] border-[#333] ps-[21px] "
                        onClick={handleCloseButtonClick}
                      >
                        <img src={Close} alt="" />
                      </button>
                    </div>
                    <ul className="flex flex-wrap gap-[12px]">
                      {Categorys.map((category, index) => (
                        <Link to={`/sale/${category?.title.toLowerCase()}`}>
                          <li
                            onClick={handleCloseButtonClick}
                            className={` ${
                              index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                            } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                          >
                            {category?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
                {activeMenu === "collection" && (
                  <div className="px-[56px]">
                    <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                      <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                        collection
                      </h2>
                      <button
                        className="close-button border-s-[1px] border-[#333] ps-[21px] "
                        onClick={handleCloseButtonClick}
                      >
                        <img src={Close} alt="" />
                      </button>
                    </div>
                    <ul className="flex flex-wrap gap-[12px]">
                      {Categorys.map((category, index) => (
                        <Link
                          to={`/collection/${category?.title.toLowerCase()}-${category.id}`}
                        >
                          <li
                            onClick={handleCloseButtonClick}
                            className={` ${
                              index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                            } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                          >
                            {category?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}

                {activeMenu === "like" && (
                  <div className="">
                    <div className="mx-[56px] max-[500px]:mx-[10px]">
                      <div className=" w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] ">
                        <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                          Like
                        </h2>
                        <button
                          className="close-button border-s-[1px] border-[#333] ps-[21px] "
                          onClick={handleCloseButtonClick}
                        >
                          <img src={Close} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="h-[500px] px-[56px] max-[500px]:px-[10px] overflow-auto">
                      <LikeCard />
                    </div>
                  </div>
                )}
                {activeMenu === "basket" && (
                  <div>
                    <div className="mx-[56px] max-[500px]:mx-[10px]">
                      <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                        <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                          Karzinka
                        </h2>
                        <button
                          className="close-button border-s-[1px] border-[#333] ps-[21px] "
                          onClick={handleCloseButtonClick}
                        >
                          <img src={Close} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="h-[500px] overflow-auto px-[56px] max-[500px]:px-[10px]">
                      <BasketCard />
                    </div>
                  </div>
                )}
                {activeMenu === "profile" && (
                  <div>
                    <div className="mx-[56px] max-[500px]:mx-[10px]">
                      <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                        <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                          Profile
                        </h2>
                        <button
                          className="close-button border-s-[1px] border-[#333] ps-[21px] "
                          onClick={handleCloseButtonClick}
                        >
                          <img src={Close} alt="" />
                        </button>
                      </div>
                    </div>
                    <Profile />
                  </div>
                )}
                {activeMenu === "menu" && (
                  <div>
                    <div className="mx-[24px]">
                      <Menu close={handleCloseButtonClick}/>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
