import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../Images/websitelogo.png'
import userIcon from '../Images/icons/userIcon.jpg'
function Header() {
    const history = useNavigate();
  return (
    <div className='header'>
      
        <ul className='header_items'>
        <li onClick={()=>history('/')}> 
          <img className="logo"
        style={{
           width:"10vh",
           height:"10vh",
         
        }}
        src={logo} alt='logo'/>
        </li>
        
            <li onClick={()=>history('/')} >Home</li>
            <li  onClick={()=>history('/journey')} >The Journey</li>
            <li  onClick={()=>history('/team')} >Team</li>
            <li  onClick={()=>history('/store')} >Store</li>
            <li  onClick={()=>history('/contact')} >Contact</li>

            <li><button className='loginbutton'><img src={userIcon} alt="noimage" /><span>Gagan</span></button></li>
        </ul>
        
    </div>
  ) 
}

export default Header
// onClick={()=>history('/')}