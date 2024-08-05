import React from 'react'
import '../Profile.css'
import { CgShoppingCart } from 'react-icons/cg'
import { BiArrowBack } from 'react-icons/bi'

const Topnav = () => {
  return (
    <div className='upper-navbar'>
        <div><BiArrowBack/></div>
        <div><CgShoppingCart/></div>
    </div>
  )
}

export default Topnav