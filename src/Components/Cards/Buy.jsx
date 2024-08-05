import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Buy.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";

const Buy = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState("");
  const [index, setIndex] = useState(0);
  const myRef = useRef();
  const navigate = useNavigate();

  console.log("Product ID:", productId);

  // using Async Await
  const getProductData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/products/verified/${productId}`);
      // const res = await axios.get(`http://localhost:4000/api/products/667faef0cf6f2e477942bbc3`);
      setProduct(res.data.result);
    } catch (error) {
      setIsError(error.message);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      getProductData();
    }
  }, [getProductData, productId]);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const addToCart = async () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productIdCart = cart.find((item) => item._id === product._id);

      if (productIdCart) {
        productIdCart.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      navigate('/cart');
    } catch (error) {
      setIsError("Failed to add product to cart: " + error.message);
    }
  };

  useEffect(() => {
    console.log("Current cart in localStorage: ", localStorage.getItem('cart'));
  }, [product]);

  if (isError) {
    return <h2>{isError}</h2>;
  }

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='app'>
      <Navbar />
      <div className='details' key={product._id}>
        <div className='details-left'>
          <div>
            <div className='big-img'>
              {product.deviceImages && product.deviceImages.length > 0 && (
                <img src={product.deviceImages[index]} alt='' />
              )}
            </div>
            <div className='thumb' ref={myRef}>
              {product.deviceImages && product.deviceImages.length > 0 && product.deviceImages.map((deviceImages, idx) => (
                <img src="" alt='' key={idx} onClick={() => handleTab(idx)} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='main1'>
            <h2>{product.brand}</h2>
            <h3>{product.name}</h3>
            <span>Rs: ₹{product.price}</span>
          </div>
          <div className='btn2'>
            <button className='cart' onClick={addToCart}>Add to cart</button>
            <Link to={`/check/${product._id}`}><button className='cart'>Buy Now</button></Link>
          </div>
        </div>
        <div className='box-2'>
          <div className='specification'>
            <h4>***Specification***</h4>
            <span>Brand: {product.brand}</span>
            <span>Model: {product.model}</span>
            <span>Ram: {product.ram}</span>
            <span>Storage: {product.storage}</span>
            <span>Camera: {product.camera}</span>
          </div>
          <div className='condition'>
            <h4>***Condition***</h4>
            <p>{product.deviceCondition}</p>
          </div>
          <div className='description'>
            <h4>***Description***</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
