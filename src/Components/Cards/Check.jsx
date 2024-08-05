import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Check.css'

const Check = () => {
  const { productId} = useParams();
  const [product, setProduct] = useState(null);
  // const [user, setUser] = useState(null);
  const [isError, setIsError] = useState("");

  // Function to fetch product data
  const getProductData = useCallback(async () => {
    try {
      if (productId) { // Ensure productid is valid before making the API call
        const res = await axios.get(`http://localhost:4000/api/products/verified/${productId}`);
        setProduct(res.data.result);
      }
    } catch (error) {
      setIsError(error.message);
    }
  }, [productId]);
  // console.log(productId)

  // const getUserData = useCallback(async () => {
  //   try {
  //     if (userId) { // Ensure productid is valid before making the API call
  //       const res = await axios.post(http://localhost:4000/api/products/${userId});
  //       setUser(res.data.result);
  //     }
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // }, [userId]);


  useEffect(() => {
    if (productId) {
    getProductData();
  }
},[getProductData, productId]);

  // Handling loading and error states
  if (isError) {
    return <h2>{isError}</h2>;
  }
  if (!product) {
    return <h2>Loading...</h2>;
  }
  // if(!user){
  //   return <h2>User Not Found</h2>
  // }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      contact: formData.get('contact'),
      address: formData.get('address'),
      city: formData.get('city'),
      district: formData.get('district'),
      state: formData.get('state'),
      pincode: formData.get('pincode')
    };
    console.log(data); // Do something with form data
  };

  // Render the component with fetched product details
  return (
    <>
<div className='user'>
       <div className='left'>
       <div className='shipping'> 
         <p>Shipping Address</p>
      </div>
       <form onSubmit={handleSubmit} key={product._id}>
         <div className='details'>
           <input
              type='text'
              id='name'
              name='name'
              // value={userName}
              placeholder='Name'
              required
            />
            <input
              type='email'
              id='email'              
              placeholder='Email'
              required
            />
            <input
              type='number'
              id='contact'             
              placeholder='Contact'
              required
            />
          </div>

          <div className='address'>
            <h2>Address</h2>
            <textarea
            id='address'
           
            placeholder='Address'
            
            rows={2}
            required
          ></textarea>
          <div className='address1'>
            <input
              type='text'
              id='city'             
              placeholder='City'
              required
            />
            <input
              type='text'
              id='district'            
              placeholder='District'
              required
            />
          </div>
          <div className='address1'>
            <input
              type='text'
              id='state'             
              placeholder='State'
              required
            />
            <input
              type='number'
              id='pincode'              
              placeholder='Pincode'
              required
            />
          </div>
          </div>
          <div className='sub'>
          <button  id='sub' type='submit'>Buy Now</button>
          </div>
       
      </form>
      </div>
      
      <div className='order'>
        <h1>Order Details</h1>

        <div className='details' key={product._id}>
        <div className='big-img'>
           
              <img src={product.deviceImages} alt='' />
            
            </div>
            <div className='main1'>
              
              <h3>{product.name}</h3>
              <span>Rs:₹{product.price}</span>
            </div>
        </div>
      </div>
      </div>
</>
  );
};

export default Check;