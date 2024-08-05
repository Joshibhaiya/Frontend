import React,{ useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css';


const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [captcha, setCaptcha] = useState("")
const [error, setError] = useState("")
const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault(); // Prevent default form submission

  try {
    const res = await axios.post("http://localhost:4000/api/signin", {
      email: email,
      password: password,
    });

    // Assuming your API returns a success message upon successful login
    if (res.data.message === 'Signin Success') {
      toast.success("Login Successful");
      navigate("/"); // Navigate to '/hero' after successful login
    } else {
      toast.error("Login Failed");
      // Handle other error cases if needed
    }

    console.log(res.data); // Log the response data from the server
  } catch (error) {
    setError(error.message);
    toast.error("Login Failed");
  }
};

  return (
    <div className="login-container">
      {error !== "" && <h2>{error}</h2>}
    <div className="tabs">
        <div
         className="tab active" 
         onClick={() =>navigate("/Login")}>Login</div>
        <div className="tab" onClick={() =>{navigate("/signup")}}>Sign Up</div>
    </div>
    <div id="login" className="Form-section active">
        <h2>Login</h2>
        <form onSubmit={handleLogin} method='post'>
         <input
         type='email'
         id='login-email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder='EMAIL'
         required
         />
            <br/>
            <input
             type="password"
            id ="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            required
            /><br/>
            <div className="captcha">Captcha Code: ABCD</div>
            <input
            className='captcha'
            type="text" 
            id="captcha" 
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            placeholder="Enter Captcha" 
            required
            /><br/>
            <input 
            type="submit"
            value={'Login'}
            placeholder='Login'
            />
        </form>
      <div/>
        <p>Don't have an account yet? ,<Link to="/signup">Click Here</Link></p>
    </div>
    <ToastContainer autoClose={3000} />
</div>
  )
}

export default Login