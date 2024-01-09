import React from "react";

const SectionName = ({children}) => {
  return (
    <div>
      <div className="flex items-center whitespace-nowrap gap-[16px] mb-[16px]">
        <h2 className="text-[#999] uppercase text-[12px] font-medium leading-normal">
          {children}
        </h2>
        <div className="h-[1px] bg-[#333] w-full rounded-[4px]"></div>
      </div>
    </div>
  );
};

export default SectionName;
