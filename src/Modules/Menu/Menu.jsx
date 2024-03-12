import React, { useEffect } from "react";
import "./Menu.scss";
import MenuArrowRight from "../../assets/svg/menu-arrow-right.svg";
import Categorys from "../../api/category";
import { Link } from "react-router-dom";
const Menu = ({ close }) => {
  useEffect(() => {
    const details = Array.from(document.querySelectorAll("details"));

    const handleClick = (targetDetail) => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    };

    const handleDetailClick = (event) => {
      const targetDetail = event.currentTarget;
      handleClick(targetDetail);
    };

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", handleDetailClick);
    });

    // Open the first details element by default

    return () => {
      details.forEach((targetDetail) => {
        targetDetail.removeEventListener("click", handleDetailClick);
      });
    };
  }, []);

  return (
    <>
      <section>
        <details>
          <summary className="relative">
            <div className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-[16px]">
                <span className="summary-title">Men</span>
              </div>
              <div className="summary-chevron-up absolute right-[0px]">
                <img src={MenuArrowRight} alt="" />
              </div>
            </div>
          </summary>

          <div className="summary-content">
            <ul className="flex flex-wrap gap-[12px]">
              {Categorys.map((category, index) => (
                <Link to={`/men/${category?.title.toLowerCase()}`}>
                  <li
                    onClick={close}
                    className={` ${
                      index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                    } pt-[12px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px] text-[#0F0F0F]`}
                  >
                    {category?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </details>

        <details>
          <summary className="relative">
            <div className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-[16px]">
                <span className="summary-title">women</span>
              </div>
              <div className="summary-chevron-up absolute right-[0px]">
                <img src={MenuArrowRight} alt="" />
              </div>
            </div>
          </summary>
          <div className="summary-content">
            <ul className="flex flex-wrap gap-[12px]">
              {Categorys.map((category, index) => (
                <Link to={`/women/${category?.title.toLowerCase()}`}>
                  <li
                    onClick={close}
                    className={` ${
                      index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                    } pt-[12px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px] text-[#0F0F0F]`}
                  >
                    {category?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </details>

        <details>
          <summary className="relative">
            <div className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-[16px]">
                <span className="summary-title">children</span>
              </div>
              <div className="summary-chevron-up absolute right-[0px]">
                <img src={MenuArrowRight} alt="" />
              </div>
            </div>
          </summary>
          <div className="summary-content">
            <ul className="flex flex-wrap gap-[12px]">
              {Categorys.map((category, index) => (
                <Link to={`/children/${category?.title.toLowerCase()}`}>
                  <li
                    onClick={close}
                    className={` ${
                      index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                    } pt-[12px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px] text-[#0F0F0F]`}
                  >
                    {category?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </details>

        <details>
          <summary className="relative">
            <div className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-[16px]">
                <span className="summary-title">sale</span>
              </div>
              <div className="summary-chevron-up absolute right-[0px]">
                <img src={MenuArrowRight} alt="" />
              </div>
            </div>
          </summary>

          <div className="summary-content">
            <ul className="flex flex-wrap gap-[12px]">
              {Categorys.map((category, index) => (
                <Link to={`/sale/${category?.title.toLowerCase()}`}>
                  <li
                    onClick={close}
                    className={` ${
                      index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                    } pt-[12px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px] text-[#0F0F0F]`}
                  >
                    {category?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </details>

        <details>
          <summary className="relative">
            <div className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-[16px]">
                <span className="summary-title">collection</span>
              </div>
              <div className="summary-chevron-up absolute right-[0px]">
                <img src={MenuArrowRight} alt="" />
              </div>
            </div>
          </summary>

          <div className="summary-content">
            <ul className="flex flex-wrap gap-[12px]">
              {Categorys.map((category, index) => (
                <Link to={`/collection/${category?.title.toLowerCase()}`}>
                  <li
                    onClick={close}
                    className={` ${
                      index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                    } pt-[12px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px] text-[#0F0F0F]`}
                  >
                    {category?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </details>
      </section>
    </>
  );
};

export default Menu;
