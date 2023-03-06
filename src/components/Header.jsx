import React from "react";
import { Link } from 'react-router-dom';
import BreadCrumb from "./BreadCrumb";
import Cart from "./Cart";

const Header = ({product} ) => {
  return (
    <>
      <div className="mx-auto w-full bg-semiblack px-4">
        <header className="header__ mx-auto h-auto lg:h-44 sm:h-44">
          <div className="flex flex-col pb-0.5 pt-4 h-28 lg:flex-row lg:justify-between lg:items-center lg:h-54 lg:py-22 lg:pb-22 sn:px-4 sm:mr-4 sm:flex-row sm:justify-between sm:items-center sm:h-54 sm:py-22 sm:pb-22 sm:px-4">
            <div className="flex flex-col justify-center">
            <Link to="/" className="storeBrand__ font-sans font-extrabold text-white underline lg:text-2xl sm:text-2xl mt-5 mb-5">
              Ringi Phone Store
            </Link>
            </div>
            <nav className="text-white text-xs lg:text-base sm:text-base flex flex-raw lg:flex-row lg:justify-between lg:items-center lg:h-full lg:py-20 lg:px-4 lg:mr-4">
            <Link to="/" 
                className="py-1 px-1 mr-2 mt-2 sm:py-4 sm:px-3 sm:mr-4 sm:mt-5 lg:py-4 lg:px-3 lg:mr-4 lg:mt-5 text-white hover:text-marinegreen hover:underline">Home</Link>
                <a className="py-1 px-1 mr-2 mt-2 sm:py-4 sm:px-3 sm:mr-4 sm:mt-5 lg:py-4 lg:px-3 lg:mr-4 lg:mt-5 text-white hover:text-marinegreen hover:underline" href="/offers">Sales</a>
                <a className="py-1 px-1 mr-2 mt-2 sm:py-4 sm:px-3 sm:mr-4 sm:mt-5 lg:py-4 lg:px-3 lg:mr-4 lg:mt-5 text-white hover:text-marinegreen hover:underline" href="/mobiles">Mobiles</a>
                <a className="py-1 px-1 mr-2 mt-2 sm:py-4 sm:px-3 sm:mr-4 sm:mt-5 lg:py-4 lg:px-3 lg:mr-4 lg:mt-5 text-white hover:text-marinegreen hover:underline" href="/refurbished">Tablets</a>
            </nav>
            <div className="flex flex-col justify-center items-end mr-3">
              <div className="Cart__ lg:flex-wrap lg:items-end lg:py-6 lg:mb-6 sm:flex-wrap sm:items-end sm:py-6 sm:mb-6">
              <Cart />
              </div>
            </div>
          </div>
            <div className="breadcrumb-wrapper bg-semiblack text-white text-xs py-1 pr-4 ml-0 pl-0 lg:text-base sm:text-base h-auto lg:h-11 lg:w-96 sm:py-0 lg:py-0.5">
              <BreadCrumb product={product}/>
            </div>
        </header>
      </div>
    </>
  );
};


export default Header;