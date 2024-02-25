import React from "react";
import Like from "../../assets/svg/like.svg";
import { Link } from "react-router-dom";

const Card = ({ action, image, title, price, delprice, color, id }) => {
  return (
    <>
      <li className="w-[24%] min-h-[461px]">
        <Link to={`/details/${id}`}>
          <div className="w-full bg-white rounded-[12px] flex items-center justify-center h-[380px] relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 py-[7px] px-[15px] text-white font-normal text-[12px] rounded-tl-[12px] rounded-br-[12px] bg-[${color}]`}
            >
              {action}
            </div>
            <img
              className="absolute top-[17px] right-[16px]"
              src={Like}
              alt=""
            />
            <img src={image} alt="" />
          </div>
        </Link>
        <div className="mt-[12px]">
          <Link to={`/details/${id}`}>
            <h3 className="text-white font-extrabold text-[16px] w-full max-w-[148px] mb-[12px]">
              {title}
            </h3>
          </Link>
          <div className="flex items-center gap-[14px]">
            <p className="text-[#999999] font-semibold text-[16px]">{price}</p>
            <del className="text-[#666] text-[12px] font-normal">
              {delprice}
            </del>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
