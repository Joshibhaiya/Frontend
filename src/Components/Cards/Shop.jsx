import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import axios from 'axios';
import Product from './Product';

const Shop = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState('');

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/products/unverified');
      setMyData(res.data.result);
      console.log(res.data.result);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <div>
      <Product />
      {isError !== '' && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 12).map((product) => (
          <div key={product._id} className="card">
           <img src={`http://localhost:4000/api/products/unverified/${product.deviceImages}`} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.brand}</h3>
            <p>{product.model}</p>
            <p>{product.description}</p>
            <div className="buy-now-btn">
              <Link to={`/buy/${product._id}`}>
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="Shop-more-btn">
        <Link to={'/shopping'}>
          <button>Load More</button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
