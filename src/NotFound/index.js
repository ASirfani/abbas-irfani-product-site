import React from 'react';
import './index.css'; 
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className='oops'>Oops!</h1>
        <p className='exist'>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;