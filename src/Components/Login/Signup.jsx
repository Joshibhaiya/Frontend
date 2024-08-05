// import React, { useState } from 'react'
// import { useNavigate, Link} from 'react-router-dom'
// import { ToastContainer, toast } from'react-toastify';
// import axios from 'axios';
// import './Login.css';


// const Signup = () => {
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");
//     const [city, setCity] = useState("");
//     const [district, setDistrict] = useState("");
//     const [state, setState] = useState("");
//     const [pincode, setPincode] = useState("");
//     const [contact, setContact] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmpassword, setConfirmpassword] = useState("");
//     // const [profilePictureUpload, setProfilePictureUpload] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
    
//     const handleSignUp = async (e) => {
//       e.preventDefault();
//       //  if (!profilePictureUpload) {
//       //   toast.error("Please upload a profile picture");
//       //   return false;
//       // }else{
//       //   return true;
//       try {
//         const res = await axios.post("http://localhost:4000/api/signup", {
//           userName: userName,
//           email: email,
//           address: address,
//           city: city,
//           district: district,
//           state: state,
//           pincode: pincode,
//           contact: contact,
//           password: password,
//           confirmpassword: confirmpassword,
//           // profilePicture: profilePictureUpload,
//         });
//         if (res.data.message === 'User registered successfully.') {
//           toast.success("Signup Successful");
//           navigate("/hero"); // Navigate to '/hero' after successful signup
//         }
//       } 
//       catch (error) {
//         setError(error.message);
//         toast.error("Signup Failed");
//       }
      
      
//       if (confirmpassword !== password) {
//           toast.error("Passwords do not match");
//           return false;
//       }
//         else{
//           toast.success("Signup Successful");
//         }
//     };
//   return (
//     <div className='Signup'>
//     {error !== "" && <h2>{error}</h2>}
//       <div className="tabs">
//         <div
//          className="tab active" 
//          onClick={() =>navigate("/Login")}>Login</div>
//         <div className="tab" onClick={() =>{navigate("/signup")}}>Sign Up</div>
//     </div>
//         <div id='signup' className='Form-section'>
//     <form className='From-container'
//     onSubmit={handleSignUp}>
//     <h1>Create Account</h1>
//         <div className='user-details'> 
//          <input
//          type='text'
//          id='username'
//          value={userName}
//          onChange={(e) => setUserName(e.target.value)}
//          placeholder='Name'
//          required
//          />
//          <input
//          type='email'
//          id='useremail'
//          value={email}
//          onChange={(e) => setEmail(e.target.value)}
//          placeholder='Email'
//          required
//          />
//          <input
//          type='number'
//          id='usercontact'
//          value={contact}
//          onChange={(e) => setContact(e.target.value)}
//          placeholder='Contact'
//          required
//          />
//         </div>
//      <h4>Address</h4>
//      <textarea
//       id='useraddress'
//       value={address}
//       onChange={(e) => setAddress(e.target.value)}
//       placeholder='Address' cols={20} rows={3}></textarea>
//       <div className='user-address1'>
//             <input
//             type='text'
//             id='usercity'
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder='City'
//             required
//             />
//             <input
//             type='text'
//             id='userdistrict'
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//             placeholder='District'
//             required
//             />
//             </div>
//             <div className='user-address1'>
//             <input
//             type='text'
//             id='userstate'
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             placeholder='State'
//             required
//             />
//             <input
//             type='number'
//             id='userpincode'
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//             placeholder='Pincode'
//             required
//             />
//           </div>
//         <input
//         type='password'
//         id='userpassword'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder='Password'
//         required
//         />
//         <input
//         type='password'
//         id='userconfirmpassword'
//         value={confirmpassword}
//         onChange={(e) => setConfirmpassword(e.target.value)}
//         placeholder='Confirm Password'
//         required
//         />
//         {/* <input
//         type='file'
//         id='userprofilepic'
//         value={profilePictureUpload}
//         onChange={(e) => setProfilePictureUpload(e.target.value)}
//         required
//         /> */}
//         <br/>
//         <input type="submit" value={"Sign Up"}></input>
//         <p>Already have an account?, <Link to="/Login">Login Page</Link> </p>
//     </form>   
// </div>
// <ToastContainer autoClose={3000} />
//     </div>
//   )
// }

// export default Signup


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import './Login.css';

// const Signup = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [district, setDistrict] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmpassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     const formData = {
//       userName,
//       email,
//       address,
//       city,
//       district,
//       state,
//       pincode,
//       contact,
//       password,
//       confirmPassword,
//     };

//     console.log("Form Data:", formData); // Console log the form data

//     try {
//       const res = await axios.post("http://localhost:4000/api/signup", formData);
      
//       console.log("Response Data:", res.data); // Console log the response data

//       if (res.data.message === 'User registered successfully.') {
//         toast.success("Signup Successful");
//         navigate("/hero"); // Navigate to '/hero' after successful signup
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || error.message;
//       setError(errorMessage);
//       toast.error("Signup Failed: " + errorMessage);
//     }
//   };

//   return (
//     <div className='Signup'>
//       {error && <h2>{error}</h2>}
//       <div className="tabs">
//         <div className="tab active" onClick={() => navigate("/Login")}>Login</div>
//         <div className="tab" onClick={() => navigate("/signup")}>Sign Up</div>
//       </div>
//       <div id='signup' className='Form-section'>
//         <form className='From-container' onSubmit={handleSignUp}>
//           <h1>Create Account</h1>
//           <div className='user-details'>
//             <input
//               type='text'
//               id='username'
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               placeholder='Name'
//               required
//             />
//             <input
//               type='email'
//               id='useremail'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder='Email'
//               required
//             />
//             <input
//               type='number'
//               id='usercontact'
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               placeholder='Contact'
//               required
//             />
//           </div>
//           <h4>Address</h4>
//           <textarea
//             id='useraddress'
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder='Address'
//             cols={20}
//             rows={3}
//             required
//           ></textarea>
//           <div className='user-address1'>
//             <input
//               type='text'
//               id='usercity'
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder='City'
//               required
//             />
//             <input
//               type='text'
//               id='userdistrict'
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               placeholder='District'
//               required
//             />
//           </div>
//           <div className='user-address1'>
//             <input
//               type='text'
//               id='userstate'
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               placeholder='State'
//               required
//             />
//             <input
//               type='number'
//               id='userpincode'
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               placeholder='Pincode'
//               required
//             />
//           </div>
//           <input
//             type='password'
//             id='userpassword'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Password'
//             required
//           />
//           <input
//             type='password'
//             id='userconfirmpassword'
//             value={confirmPassword}
//             onChange={(e) => setConfirmpassword(e.target.value)}
//             placeholder='Confirm Password'
//             required
//           />
//           <br />
//           <input type="submit" value={"Sign Up"}></input>
//           <p>Already have an account? <Link to="/Login">Login Page</Link> </p>
//         </form>
//       </div>
//       <ToastContainer autoClose={3000} />
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const formData = {
      userName,
      email,
      address,
      city,
      district,
      state,
      pincode,
      contact,
      role:"user",
      password,
      confirmPassword,
    };

    console.log("Form Data:", formData); // Console log the form data

    try {
      const res = await axios.post("http://localhost:4000/api/signup", formData);
      
      console.log("Response Data:", res.data); // Console log the response data

      if (res.data.message === 'User registered successfully.') {
        toast.success("Signup Successful");
        navigate("/hero"); // Navigate to '/hero' after successful signup
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setError(errorMessage);
      toast.error("Signup Failed: " + errorMessage);
    }
  };

  return (
    <div className='Signup'>
      {error && <h2>{error}</h2>}
      <div className="tabs">
        <div className="tab active" onClick={() => navigate("/Login")}>Login</div>
        <div className="tab" onClick={() => navigate("/signup")}>Sign Up</div>
      </div>
      <div id='signup' className='Form-section'>
        <form className='From-container' onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className='user-details'>
            <input
              type='text'
              id='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Name'
              required
            />
            <input
              type='email'
              id='useremail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
            <input
              type='number'
              id='usercontact'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder='Contact'
              required
            />
          </div>
          <h4>Address</h4>
          <textarea
            id='useraddress'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address'
            cols={20}
            rows={3}
            required
          ></textarea>
          <div className='user-address1'>
            <input
              type='text'
              id='usercity'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              required
            />
            <input
              type='text'
              id='userdistrict'
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder='District'
              required
            />
          </div>
          <div className='user-address1'>
            <input
              type='text'
              id='userstate'
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='State'
              required
            />
            <input
              type='number'
              id='userpincode'
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder='Pincode'
              required
            />
          </div>
          <input
            type='password'
            id='userpassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <input
            type='password'
            id='userconfirmpassword'
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder='Confirm Password'
            required
          />
          <br />
          <input type="submit" value={"Sign Up"}></input>
          <p>Already have an account? <Link to="/Login">Login Page</Link> </p>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default Signup;
