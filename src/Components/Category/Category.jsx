import React from 'react'
import './Category.css'
import Img4g from '../../Assests/4G.png'
import Img5g from '../../Assests/5G.jpeg'
import Imgrefurbished from '../../Assests/Refurbished.jpeg'
import Imgtablets from '../../Assests/Tablets.jpeg'


const Category = () => {
  return (
    <div className='category'>
        <h1>Category</h1>
     <div className='category-in'>
      <div className='category-in-in'>
        <img src={Img4g} alt="" />
        </div>
     <div className='category-in-in'>
      <img src={Img5g} alt="" />
      </div>
     <div className='category-in-in'>
      <img src={Imgrefurbished} alt="" />
      </div>
     <div className='category-in-in'>
      <img src={Imgtablets} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Category