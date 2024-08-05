import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { IoLogoReact } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useParams } from 'react-router-dom';
// import Slider from './Slider';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Logic to check if user is logged in
        // This could be an API call to get user data or checking localStorage/sessionStorage
        const loggedInUser = { id: `` }; // Example user data
        setUser(loggedInUser);
    },[]);
        const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?id=${searchQuery}`);
    };
    const handleProfileNavigate = () => {
        if (user){
            navigate(`/profile/${user.id}`);
        } else {
            navigate("/login"); 
        };
    }
  return (
<div>
    <div className='main'>
        <div className='nav-container'>
            <nav>
                <div className='nav-logo'>
                 <i className='logo'><IoLogoReact/></i>
                 <h1>Startup</h1>
                </div>
                <div>
                <ul className={showMenu ? 'nav-list, Mobile-nav-list':'nav-list'}>
                    <li onClick={() => {navigate("/")}}>Home</li>
                    <li onClick={() =>{navigate("/shopping")}}>Shop</li>
                    {/* <li><Link to={"/"}></Link>Blog</li> */}
                    <li  onClick={() =>{navigate("/about")}}>About</li>
                    <li onClick={() => {navigate("/contact")}}>Contact</li>
                </ul>
                </div>
                <div className={showSearch ? 'search-box, bar':'search-box'}>
                    <form onSubmit={handleSearchSubmit} action="">
                    <input
                    type="search" 
                    name="search-bar" 
                    id="search-bar" 
                    placeholder='Search' 
                    aria-label='Search'
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value) } />
                    <button className='btn-search' type='submit'><FaSearch/></button>
                    </form>
                </div>
                <div className='nav-logos'>
                <button onClick={() => {navigate("/cart")}}><FaShoppingCart /></button>
                <button><MdOutlineFavoriteBorder/></button>
                <button onClick={handleProfileNavigate}><IoPersonCircleSharp/></button>
                <button onClick={() => navigate('/login')}>login</button>
                </div>
                <div className='mobile-screen'>
                <button className='mobile-nav-menu' onClick={() => setShowMenu(!showMenu)}><GiHamburgerMenu/></button>
                <button className='mobile-search-icon' onClick={() => setShowSearch(!showSearch)}><FaSearch/></button>
                </div>
            </nav>
        </div>
        
    </div>
    {/* <Slider/> */}
</div>
  )
}

export default Navbar