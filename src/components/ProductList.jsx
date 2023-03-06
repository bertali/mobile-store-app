import React, { useState, useEffect } from 'react';
import Product from './ProductComponent';
import { apiMobile } from '../services/apiMobile.js';
import { Link } from 'react-router-dom';

function ProductList({ searchTerm }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [showButton, setShowButton] = useState(false); 
  const api = apiMobile();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.getList();
        setProducts(data);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(product =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = () => {
    if (window.scrollY > 200) { 
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="LoadingHome__ ">Loading...</div>;
  } else {
    return (
      <>
      <div className="container mt-15 mx-auto row-span-1">
      {filteredProducts.length > 0 && (
        <h1 className="max-w-screen-lg lg:text-2xl font-bold text-gray-800 mb-6 mt-6 ml-6">All our products</h1>
      )}
      <div className="">
        <ul className="grid grid-cols-4 gap-4">
          {products && filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link state={{ product }} key={index} to={`/product/${product.id}`}>
                <Product product={product} />
              </Link>
            ))
          ) : (
            searchTerm && (
              <li className="col-span-4 ml-5 text-red">Sorry, we could not find it</li>
            )
          )}
        </ul>
      </div>
      {showButton && (
            <button className="go-to-top-bt__ bg-gray-700 text-white font-bold py-2 px-4 rounded fixed bottom-10 right-10" onClick={handleButtonClick}>
              Go to top
            </button>
      )}
    </div>
    </>
    );
  }            
}

export default ProductList;

