import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiMobile } from '../services/apiMobile.js';
import ProductForm from '../components/ProductForm.jsx';


const DetailsViewComponent = ({product, setProduct}) => {
  const api = apiMobile();
  const location = useLocation();
  console.log('*****',product)
  const { id } = location.state.product;
  console.log(id)
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await api.getDetails(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
      setError(error);
      setIsLoaded(true);
    };
    fetchProductDetails();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <> 
          <div className="mr-2 grow grid-col-1 grid-rows-3 lg:container lg:mx-auto lg:mt-8 lg:px-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:flex-col-2 sm:flex-col-2 sm:grid-rows-2">
            <div className="flex flex-col pt-2 pb-2 pr-5 pl-5 justify-center sm:justify-center">
              <img className="product-image__ col-span-1 order-first w-full mx-auto h-auto lg:w-auto lg:h-full sm:w-auto sm:h-full" 
                  alt={product.model} 
                  src={product.imgUrl} />
            </div>
            <div className="col-span-1 col-start-2 justify-center pt-2 pb-2 pr-5 pl-5 ml-4 lg:w-1/2 sm:w-1/2">
              <div className="product-description__ grid text-black shadow-md rounded-lg p-4 mt-2 border-solid border-4 border-marinegreen h-full lg:h-96 lg:w-96 sm:h-96 sm:w-96">
                <div className="text-center font-black mb-4 text-2xl">
                <h1>{product.brand} + {product.model}</h1>
                <h2 className="mt-2">{product.price}€</h2>
                </div>
                <ul className="font-medium list-none py-2 px-2 ml-3">
                <li>{product.cpu}</li>
                <li>{product.ram}</li>
                <li>{product.os}</li>
                <li>{product.displayResolution}</li>
                <li>{product.battery}</li>
                <li>{product.primaryCamera}</li>
                <li>{product.secondaryCmera}</li>
                <li>{product.dimentions}</li>
                <li>{product.weight}g</li>
                </ul>
            </div>
            </div>
            <div className="product-form__ lg:col-start-2 sm:lg:col-start-2">
              <ProductForm product={product}/>
            </div>
          </div>
        </>
    );
  }
};

export default DetailsViewComponent;