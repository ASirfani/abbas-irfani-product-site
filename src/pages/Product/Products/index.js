import React from 'react'
import productsData from '../../../data.json';
import TemplateContainer from '../../../container/TemplateContainer';


const Products = () => {

  return (
    <div className='about-us'>
      <h1 className='about titlePage'>All Products</h1>
      <div className='container'>
        <div className='layoutProduct'>
          {productsData.map((product, index) => (
            <TemplateContainer
              key={index}
              name={product.name}
              price={product.price}


            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products