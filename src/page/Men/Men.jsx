import React from "react";
import { useLocation } from "react-router-dom";

const Men = () => {
  const location = useLocation();
  const modifiedPathname = location.pathname.replace("/", " ").trim();

  return (
    <section>
      <div className="text-white">
        <div className="container">
          <div>{modifiedPathname}</div>
        </div>
      </div>
    </section>
  );
};

export default Men;
