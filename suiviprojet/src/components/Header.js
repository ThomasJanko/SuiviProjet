import React, { useEffect } from "react";
import Link from "next/link";
import logo from "../public/assets/logo.png";

const Header = () => {

  return (
 
    <header className=" -my-10  shadow-sm bg-teal-400 relative" >
      <div className=" flex items-center justify-between" style={{marginRight: "100px", marginLeft: "100px"}}>
      <Link href="/">
          <img src={logo.src} alt="Quick'Up" className="w-44" />
              
      </Link>


          <div className="w-full max-w-xl relative flex"> 
              <span className="absolute left-4 top-3 text-lg text-gray-400">
              <ion-icon name="search-outline"></ion-icon>

              
              </span> 

              <input type="text" className="w-full border border-orange-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search" /> 

              <button className="bg-red-500 border-red-500 text-white px-8 rounded-r-md hover:bg-red-400 hover:text-white transition" >Search</button>
          </div>


          <div className="flex items-center space-x-4">
          <Link href="/whishlist">
            <a  className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="heart-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
                Wish List
              </div>

              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span>
            </a>
            </Link>

          <Link href="/cart">
            <a className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="cart-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
               Cart
              </div>

              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span>
            </a>
          </Link>


          <Link href="/account">
            <a className="text-center text-gray-300 hover:text-red-500 transition relative">
              <div className="text-4xl">
              <ion-icon name="person-circle-outline"></ion-icon>
              </div>
              <div className="text-xs leading-3">
                Account
              </div>

              {/* <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs"> 8 </span> */}
            </a>
            </Link>
          </div>
      </div>

    </header>
    
  );
};

export default Header;
