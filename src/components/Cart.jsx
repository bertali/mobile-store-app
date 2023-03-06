import { CartItemsContext } from '../context/CartItemContext.jsx';
import React, { useContext, useEffect, useState } from "react";

const Cart = ({product} ) => {
  const [localStorageCount, setLocalStorageCount] = useState(0);

  useEffect(() => {
    const savedData = localStorage?.getItem("itemData");
    const initialValue = JSON.parse(savedData);
    setLocalStorageCount(initialValue?.length || 0);
  }, []);
  
  const { cartCount, setCartCount } = useContext(CartItemsContext);

  return (
    <>       
      <div className="cart-count__ text-white mr-3 mt-3 items-end">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 12.064a2 2 0 002 1.936h9.592a2 2 0 001.98-1.65L23 4H6"></path>
            </svg>
            <span className="cart-badge absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {cartCount === 0 ? cartCount + localStorageCount : cartCount}
            </span>
          </div>
      </div>
    </>
  );
};


export default Cart;