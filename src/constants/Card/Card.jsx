import React, { useState } from "react";
import Like from "../../assets/svg/like.svg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
const Card = ({ action, image, title, price, delprice, color, id }) => {
  const [reload, setReload] = useState(false);
  const likeCheck = () => {
    const newdata = JSON?.parse(localStorage?.getItem("like"));
    return newdata?.filter((item) => item === id).length > 0;
  };

  function addTolike() {
    setReload((prev) => !prev);
    let storedLike = JSON.parse(localStorage.getItem("like")) || [];
    storedLike.push(id);
    localStorage.setItem("like", JSON.stringify(storedLike));
    toast.success('Add to like ');
  }

  function removeTolike() {
    setReload((prev) => !prev);
    let storedLike = JSON.parse(localStorage.getItem("like")) || [];
    const removData = storedLike?.filter((item) => item !== id);
    localStorage?.setItem("like", JSON?.stringify(removData));
  }
  return (
    <>
      <li className="w-[24%] min-h-[461px]">
        <div className="w-full bg-white rounded-[12px] flex items-center justify-center h-[380px] relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 py-[7px] px-[15px] text-white font-normal text-[12px] rounded-tl-[12px] rounded-br-[12px] bg-[${color}]`}
          >
            {action}
          </div>

          <FaHeart
            onClick={() => (likeCheck() ? removeTolike() : addTolike())}
            size={20}
            className="absolute top-[17px] right-[16px] cursor-pointer"
            color={likeCheck() ? "red" : "#666666"}
          />
          <Link to={`/details/${id}`}>
            <img src={image} alt="" />
          </Link>
        </div>
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
            </del>{" "}
          </div>
        </div>
      </li>
      <Toaster />
    </>
  );
};

export default Card;
