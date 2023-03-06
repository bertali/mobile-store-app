import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage.js';

function App() {

  return(
    <Router>  
       <Routes>
        <Route path="/" element={<ProductListPage />} />
       </Routes>
    </Router>
  );
}

export default App;
