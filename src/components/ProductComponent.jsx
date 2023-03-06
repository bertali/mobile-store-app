import React from "react";

const ProductComponent = ({product}) => {
    return (
     <>
     <li className="product-component__ mx-auto w-full h-full justify-center items-center hover:bg-grey border-strongourple-indigo-500/475 rounded-lg bg-white border-4 col-span-1 md:col-span-1 sd:col-span-2 shadow-lg"
            key={product.id}>
            <img className="mx-auto py-2 px-2 mt-1 mb-1 rounded-md" src={product.imgUrl} alt={product.model}/>
            <div className="ml-4 mt-2 mb-2">
              <h2>{product.brand} - {product.model}</h2>
              <p>{product.price} €</p>
            </div>
      </li>
     </>   
    );
};

export default ProductComponent;