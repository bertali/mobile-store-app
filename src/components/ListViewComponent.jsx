import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import SearchBar from './SearchBar';

function ListViewComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    const value = event.target.value.slice(0, 50);
    setSearchTerm(value);
  };
  
  return (
    <>
      <div className="grid justify-center container mx-auto mt-5 lg:mx-5">
        <SearchBar className="mt-2 mb-2 mr-3 float-right hover:bg-gray-300 placeholder:italic placeholder:text-semiblack block bg-white w-1/2 ml-20 border-4 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-grey focus:ring-grey focus:ring-1 sm:text-sm"
          type="text"
          placeholder="Search here..."
          onChange={handleSearch}
          value={searchTerm}
          maxLength={50}
        />
        <ProductList searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default ListViewComponent;
