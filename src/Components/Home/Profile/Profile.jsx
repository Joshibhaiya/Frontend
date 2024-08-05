import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Profile.css'


const Profile = () => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");
  const {userId} = useParams();  
  
  console.log("userId", userId);

  const getUserDetails = useCallback(async () => {
  try {
    if (!userId) {
      console.error('UserId is not defined');
      return;
    }
    const res = await axios.get(`http://localhost:4000/api/users/${userId}`);
    // const res = await axios.get(`http://localhost:4000/api/users/66793a0c1c7e70049f91d98e`);
    const userData  = res.data.user;
    setUser(userData);
    setUserName(userData.username);
    setEmail(userData.email);
    setAddress(userData.address);
    setCity(userData.city);
    setDistrict(userData.district);
    setState(userData.state);
    setPincode(userData.pincode);
    setContact(userData.contact);
  }catch (error) {
    console.error('Error fetching user details:', error);
    setIsError(true);
  }
}, [userId]);

useEffect(() => {
  if (userId) {
    getUserDetails();
  }
}, [getUserDetails, userId]);

if (isError){
  return <div>Error: could not fetch user details</div>
}
if(!user){
  return <h1>User Not Found</h1>
}
  return (
<div>
  {isError && <div>Error:{isError}</div>}
    <div className="dashboard">
        <div className="profile-page">
            <h1>My Profile</h1>
            <img src="" alt="" />
        <span>Name:
              <input
              type='text'
              id='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Name'
              required
            />
        </span>
        <span>Email:
        <input
              type='email'
              id='useremail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
        </span>
        <span>Address:
        <input
              type='text'
              id='useraddress'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='address'
              required
            />
        </span>
        <span>City:
        <input
              type='text'
              id='usercity'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              required
            />
        </span>
        <span>District:
        <input
              type='text'
              id='userdistrict'
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder='District'
              required
            />
        </span>
        <span>State:
        <input
              type='text'
              id='userstate'
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='State'
              required
            />
        </span>
        <span>Pincode:
        <input
              type='number'
              id='userpincode'
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder='Pincode'
              required
            />
        </span>
        <span>Contact:
        <input
              type='number'
              id='usercontact'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder='Contact'
              required
            />
        </span> 
        </div>
    </div>
</div>
  )
}

export default Profile