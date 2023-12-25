import React from "react";

const ChangeLang = () => {
  return (
    <div>
      <select className="bg-transparent text-[12px] font-medium leading-normal text-[#000] outline-none">
        <option className="text-[12px] font-medium leading-normal" value="eng">
          English
        </option>
        <option className="text-[12px] font-medium leading-normal" value="ru">
          Russia
        </option>
        <option className="text-[12px] font-medium leading-normal" value="uz">
          Uzbek
        </option>
      </select>
    </div>
  );
};

export default ChangeLang;
