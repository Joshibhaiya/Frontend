import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Product.css'
import { IoIosArrowDown } from "react-icons/io";

const Product = () => {
  const [menu, setMenu] = useState(false);
  return (
    
      <div className='product_overview'>
        <div className='text'>
          <div className='text-btn'>
            <h1 >PRODUCT OVERVIEW</h1>
            <ul className='all'>
              <li><Link to={"/"}></Link>ALL PRODUCTS</li>
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
    
  )
}

export default Product
