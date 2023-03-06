import { useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';


function BreadCrumb({product}) {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();

    const showProductDetails = product && product.brand && product.model;

    const routes = [
          { path: '/', breadcrumb: 'Home' },
          { path: '/product/:id', breadcrumb: `${product.brand}`- `${product.model}`} 
          ];

  return (
      <>
       <div className="breadcrumb__"> 
         <nav className="text-xs lg:text-base sm:text-base flex ml-6 mb-4 px-5 py-3 w-full h-auto bg-semiblack text-white" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
               <li className="inline-flex items-center">
                 <a href="/" 
                    className="text-xs lg:text-base sm:text-base inline-flex items-center font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" 
                       className="w-4 h-4 mr-2 text-xs lg:text-base sm:text-base" 
                       fill="currentColor" 
                       viewBox="0 0 20 20" 
                       xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                      </path>
                  </svg>
                    Home 
                  </a>
                </li>
                  {showProductDetails &&
                <li>
                  <div className="flex items-center">
                  <svg aria-hidden="true" 
                        className="w-6 h-6 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" 
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                              clipRule="evenodd">
                        </path>
                  </svg>
                  <div className="brand-model__ ml-1 text- font-base text-white hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                    <ul>
                      <p>
                        {product.brand} - {product.model}
                      </p>
                    </ul>
                    </div>
                  </div>
                </li>}
            </ol>
          </nav>
        </div>
      </>
  );
}

export default BreadCrumb;

