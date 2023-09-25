import React, { useState } from 'react';

function AddProduct() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <div>Content to display when open</div>}
    </div>
  );
}

export default AddProduct;
