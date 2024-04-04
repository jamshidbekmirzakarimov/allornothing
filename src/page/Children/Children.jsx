import React, { useRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ArrowLeft from "../../assets/svg/arrowleft.svg";
import ArrowRight from "../../assets/svg/arrowleft.svg";
import Categorys from "../../api/category";
import Products from "../../api/api";
import Card from "../../constants/Card/Card";
import { useState } from "react";
import PaginationLeft from "../../assets/svg/pagination-arrow-left.svg"
import PaginationRight from "../../assets/svg/pagination-arrow-right.svg"
import PathBack from "../../constants/PathBack/PathBack";
import { NewProduct, NewProductCard } from "../../Modules";
const Children = () => {
  const { id } = useParams();
  console.log(id, "category idlar");
  const location = useLocation();
  const modifiedPathname = location.pathname.replace("/", "").trim();
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(Products.length / productsPerPage);

  useEffect(() => {
    // Scroll to the active category element
    const activeCategoryElement = scrollContainerRef.current.querySelector(
      `.category-${id}`
    );
    if (activeCategoryElement) {
      activeCategoryElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [id]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <section className="Men">
      <div className="text-white">
        <div className="container">
       <PathBack/>
          <ul
            ref={scrollContainerRef}
            className="flex gap-[12px] overflow-x-scroll pb-[5px] mb-[40px]"
          >
            {Categorys.map((category, index) => (
              <Link
                to={`/men/${category?.title.toLowerCase()}`}
                key={index}
                className={`category-${category?.title.toLowerCase()}`}
              >
                <li
                  className={`${
                    id === category?.title.toLowerCase()
                      ? "bg-[#F6CE3C]"
                      : "bg-[#999999]"
                  } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                >
                  {category?.title}
                </li>
              </Link>
            ))}
          </ul>
          <ul className="grid grid-cols-4 gap-x-[10px] gap-y-[48px] max-[800px]:grid-cols-3 max-[500px]:grid-cols-2">
            {currentProducts.map((product, index) => (
              <Card
         
                key={index}
                id={product.id}
                action={product.action}
                image={product.image[0]}
                title={product.title}
                price={product.price}
                delprice={product.delprice}
                color={product.color}
              />
            ))}
          </ul>
          <div className="flex justify-between items-center mt-[52px] bg-[#262626] p-[4px] rounded-[12px] h-[44px]">
            <button
              className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] bg-[#E6E6E6]"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <img src={PaginationLeft} alt="" />
            </button>
           <div className="flex items-center">
           {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-[36px] h-[36px] border-s-[1px]  rounded-[8px]  border-[#333333] last:border-e-[1px] ${
                  currentPage === index + 1
                    ? " bg-[#F6CE3C] text-black w-[36px] h-[36px]   border-s-none"
                    : "bg-transparent rounded-none w-[36px] h-[36px] text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
           </div>
            <button
              className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] bg-[#E6E6E6]"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img src={PaginationRight} alt="" />
            </button>
          </div>
        </div>
        <NewProductCard/>
      </div>
    </section>
  );
};

export default Children;
