import React from 'react';
import DetailsViewComponent from '../components/DetailsViewComponent.jsx';

function ProductDetailPage({product, setProduct}) {

  return (
    <div>
      <DetailsViewComponent product={product} setProduct={setProduct}/>
    </div>
  );
}

export default ProductDetailPage;