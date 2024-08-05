import { useState, useEffect } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./Shopping.css"
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import Product from "../Cards/Product";


const Shop = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [menu, setMenu] = useState(false);
  
    // using Async Await
    const getMyPostData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products/unverified");
        setMyData(res.data.result);
      } catch (error) {
        setIsError(error.message);
      }
    };

    useEffect(() => {
      getMyPostData();
    }, []);
    // console.log(myData);

  return (
    <div>
        <Navbar/>
        <div className="shop-product-filter-container">
        <div className='product_overview'>
        <div className='text'>
          <div className='text-btn'>
            <h1 >PRODUCT OVERVIEW</h1>
            <ul className='all'>
            <li><Link to={"/"}>ALL PRODUCTS</Link></li>

              <button className='product-nav-list' onClick={() => setMenu(!menu)}><IoIosArrowDown /></button>
            </ul>
          </div>
          <ul className={menu ? 'lists, product-nav-list':'lists'}>
            <li><Link to={"/"}></Link>APPLE</li>
            <li><Link to={"/"}></Link>ONEPLUS</li>
            <li><Link to={"/"}></Link>SUMSUNG</li>
            <li><Link to={"/"}></Link>MI</li>
            <li><Link to={"/"}></Link>REALME</li>
            <li><Link to={"/"}></Link>OTHERS</li>
          </ul>
        </div>
      </div>
        </div>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="shopping-grid">
        {myData.map((product) => (
          // const { name, id, brand, model, description, deviceImages} = post;
            <div key={product._id} className="shopping-card">
            <img src={product.deviceImages?`http://localhost:4000/${product.deviceImages}`:""} alt={product.name} />
              <h2>{product.name}</h2>
              <h3>{product.brand}</h3>
              <p>{product.model}</p>
              <p>{product.description}</p>
              <div className="shopping-buy-now-btn">
                 <Link to={`/buy/${product._id}`}>
              <button>Buy  Now</button>
              </Link></div>
            </div>   
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Shop




