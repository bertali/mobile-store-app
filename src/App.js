import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProductListPage from "./pages/ProductListPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import { CartItemsContext } from "./context/CartItemContext.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [product, setProduct] = useState({});

  return (
    <Router>
      <CartItemsContext.Provider value={{ cartCount, setCartCount }}>
        <Header
          product={product}
          setProduct={setProduct}
          cartCount={cartCount}
        />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route
            exact
            path="/product/:id"
            element={
              <ProductDetailPage product={product} setProduct={setProduct} />
            }
          />
        </Routes>
        {/* <Footer /> */}
        {/* <ProductForm product={product}/> */}
      </CartItemsContext.Provider>
    </Router>
  );
}

export default App;
