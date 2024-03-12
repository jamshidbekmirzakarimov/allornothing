import React from "react";
import ArrowLeft from "../../assets/svg/arrowleft.svg";
import { Link, useLocation } from "react-router-dom";
const PathBack = () => {
    const location = useLocation();
    const modifiedPathname = location.pathname.replace("/", "").trim();
  return (
    <>
      <div className="flex items-center mt-[90px] border-b-[1px] border-[#262626] pb-[20px] mb-[20px]">
        <Link className="flex items-center" to="/">
          <img src={ArrowLeft} alt="" />
          <h2 className="capitalize font-extrabold text-[#E6E6E5] text-[16px] leading-[21px]">
            {modifiedPathname}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default PathBack;
