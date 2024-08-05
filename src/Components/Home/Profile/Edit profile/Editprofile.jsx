import React, {useState} from 'react'
import './Editprofile.css'
import Topnav from '../Profile-Navbar/Topnav';
import Sidenavbar from '../Profile-Navbar/Sidenavbar';


const Editprofile = () => {
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const handleSubmit = (e) => {
      
      console.log("Firstname", firstname );
      console.log("Surname",surname );
      console.log("Email", email);
      console.log("Mobile",mobile );
      console.log("Address",address );
      console.log("Pincode",pincode );
      console.log("State",state );
      console.log("country",country );
      alert("update Successfully")
    };
    return (
        <div className='update-profile' >
            <Topnav/>
            <Sidenavbar/>
            
            <div className='profile-body'>
            <form className='' onSubmit={handleSubmit}>
               <h1>Edit Profile</h1>
               <div className='input-box'>
              <input 
                 placeholder='Enter your firstname'
                 type='firstname'
                       id='firstname'
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)}
                       required/>
                
               </div>
               <div className='input-box'>
               <input 
                 placeholder='Enter your Surname'
                 type='surname'
                       id='surname'
                       value={surname}
                       onChange={(e) => setSurname(e.target.value)}
                       required/>
               </div>
               <div className='input-box'>
               <input  
              placeholder='Email'
              type='Email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
          </div>
          <div className='input-box'>
                <input 
                 placeholder=' Enter your Mobile-No'
                    type='mobile'
                    id='mobile'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required  Mobile No
                    />
          </div>
          <div className='input-box'>
              <input  
              placeholder='Address Line 1'
              type='address'
                    id='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />  
          </div>
         
          <div className='input-box'>
            <input  
              placeholder=' Address Line2'
                    />
          </div>
          
          <div className='input-box'>
              <input  
              placeholder='pincode'
              type='pincode'
                    id='pincode'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                    />  
          </div>
          <div className='input-box'>
           <input  
              placeholder='State'
              type='state'
                    id='state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    />  
          </div>
          <div className='input-box'>
            <input  
              placeholder='Country'
              type='country'
                    id='Country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    />  
          </div>
          <div className='Btn'>
          <button type="submit" className='Btn-submit'>Update</button>
          </div>
          </form>
            </div>
        </div>
      )
}

export default Editprofile