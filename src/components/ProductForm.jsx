import React, { useState, useEffect, useContext } from 'react';
import { apiMobile } from '../services/apiMobile.js';
import { CartItemsContext } from '../context/CartItemContext.jsx';


function ProductForm({product}) {
    const api = apiMobile();
    const [isCapacityActive, setIsCapacityActive] = useState(false);
    const [isColorActive, setIsColorActive] = useState(false);
    const [selectedCapacity, setSelectedCapacity] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [addedToCart, setAddedToCart] = useState(false);
    const savedData = localStorage.getItem("itemData");
    const initialValue = JSON.parse(savedData);
    const { cartCount, setCartCount } = useContext(CartItemsContext);

    useEffect(() => {
      if (product?.options?.storages?.length === 1) {
        setSelectedCapacity(product.options.storages[0].code);
        setIsCapacityActive(true);
      } else {
        setIsCapacityActive(false);
      }
    }, [product?.options?.storages]);

    useEffect(() => {
      if (product?.options?.colors?.length === 1) {
        setSelectedColor(product.options.colors[0].code);
        setIsColorActive(true);
      } else {
        setIsColorActive(false);
      }
    }, [product?.options?.colors]);
  
    function handleCapacityClick(event) {
      setSelectedCapacity(event.target.value);
      setIsCapacityActive(true);
    }

    function handleColorClick(event) {
      console.log(event)
      setSelectedColor(event.target.value);
      setIsColorActive(true);
    };

    async function handleSubmit (event) {
      event.preventDefault();
      const itemData = {
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedCapacity
      };

    let itemDataJson = []; 
      if (savedData) {
        try {
          itemDataJson = initialValue;
          console.log("Im initila value",initialValue)
        } catch (err) {
          console.error("Error parsing savedData", err);
        }
      }
    
    itemDataJson.push(itemData); 

    localStorage.setItem("itemData", JSON.stringify(itemDataJson)); 

    const localStorageTimestamp = Date.now();
    localStorage.setItem("lsTimestamp", localStorageTimestamp); 
    console.log("Im localStorageTimestamp", localStorageTimestamp)

    await api.post(itemData);

    setCartCount(itemDataJson?.length);
  
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
      localStorage.removeItem("itemData");
      localStorage.removeItem("lsTimestamp");
    }, 3600000);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };


  return (
    <>
      <div>
        <div className="col-span-1 pb-2 pt-0 mb-2 grid justify-center mt-6 sm:w-1/2 sm:order-2">
          {product && product?.options && (
            <>
              <div className="storage-capacity__ mt-4">
                <p>Storage capacity:</p>
                {product?.options?.storages.map((storage, index) => (
                  <button
                  className={`btn-form-options ${
                    storage.code == selectedCapacity ? 'bg-strongmarinegreen text-white' : ''
                  }`}
                  key={index}
                  value={storage.code}
                  onClick={handleCapacityClick}
                  >
                  {storage.name}
                 </button>
                ))} 
              </div>
              <div className="available-colors__ mt-4">
                <p>Available in color:</p>
                {product?.options?.colors.map((color, index) => (
                  <button
                  className={`btn-form-options ${
                    color.code == selectedColor ? 'bg-strongmarinegreen text-white' : ''
                  }`}
                  key={index}
                  value={color.code}
                  onClick={handleColorClick}
                  >
                  {color.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
          <div className="add-button-cart__ text-center pb-2 lg:text-left lg:ml-8 lg:pb-4 lg:pl-20 sm:text-left sm:ml-8 sm:pb-4 sm:pl-20">
            <button onClick={handleSubmit} 
            disabled={!isCapacityActive || !isColorActive}
            className="btn-form-add">
              Add to cart
            </button>
            {addedToCart && (
              <div className="ad-to-cart-confirmation__ text-black text-bold">
                <p>Your item has been added to the cart🎉</p>
              </div>
            )}
          </div>
      </div>
    </>
  );
}

export default ProductForm;
