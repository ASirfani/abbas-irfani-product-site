import React, { useState } from 'react';
import './index.css'; // Apply your own styling here

const staticProductData = [
  { id: 1, name: 'Product 1', price: 100, inStock: true, discount: 10, details: 'Lorem ipsum...' },
  { id: 2, name: 'Product 2', price: 150, inStock: false, discount: 0, details: 'Lorem ipsum...' },
  { id: 3, name: 'Product 3', price: 200, inStock: true, discount: 20, details: 'Lorem ipsum...' },
  { id: 4, name: 'Product 4', price: 80, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 5, name: 'Product 5', price: 300, inStock: true, discount: 15, details: 'Lorem ipsum...' },
  { id: 6, name: 'Product 6', price: 50, inStock: false, discount: 0, details: 'Lorem ipsum...' },
  { id: 7, name: 'Product 7', price: 120, inStock: true, discount: 10, details: 'Lorem ipsum...' },
  { id: 8, name: 'Product 8', price: 180, inStock: true, discount: 25, details: 'Lorem ipsum...' },
  { id: 9, name: 'Product 9', price: 70, inStock: true, discount: 8, details: 'Lorem ipsum...' },
  { id: 10, name: 'Product 10', price: 250, inStock: true, discount: 12, details: 'Lorem ipsum...' },
  { id: 11, name: 'Product 11', price: 160, inStock: false, discount: 0, details: 'Lorem ipsum...' },
  { id: 12, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 13, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 14, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 15, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 16, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 17, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 18, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 19, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 20, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 21, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 22, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 23, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 24, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 25, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },
  { id: 26, name: 'Product 12', price: 90, inStock: true, discount: 5, details: 'Lorem ipsum...' },

  // ... Add more static product data
];

const itemsPerPage = 10;

const MainProductContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(staticProductData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = staticProductData.slice(startIndex, endIndex);

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Discount</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inStock ? 'Yes' : 'No'}</td>
              <td>{product.discount}%</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
              <td><button>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='oversview'>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainProductContent;
