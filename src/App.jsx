import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/Components/Login/Login'
import Signup from './Components/Login/Signup'
import Home from './Components/Home.jsx'
import Hero from './Components/Home/Hero'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Navbar from './Components/Home/Navbar.jsx'
import Shopping from './Components/Shopping/Shopping.jsx'
import Buy from './Components/Cards/Buy.jsx'
import Check from './Components/Cards/Check.jsx'
import Profile from './Components/Home/Profile/Profile.jsx'
import Cart from './Components/Cards/Add To Card/Cart.jsx'
import Editprofile from './Components/Home/Profile/Edit profile/Editprofile.jsx'


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/login' Component={Login}/>
                <Route path='/signup' Component={Signup}/>
                <Route path='/navbar' Component={Navbar}/>
                <Route path='/hero' Component={Hero}/>
                <Route path='/about'Component={About}/>
                <Route path='/contact' Component={Contact}/>
                <Route path='/shopping' Component={Shopping}/>
                <Route path='/buy/:productId' Component={Buy}/>
                <Route path='/check/:productId' Component={Check}/>
                <Route path='/profile/:userId' Component={Profile}/>
                <Route path='/cart' Component={Cart}/>
                <Route path={'/editprofile'} Component={Editprofile}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App