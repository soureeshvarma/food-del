import React from 'react';
import "./Footer.css";
import {assets} from '../../assets/assets';

const Footer=()=>{
    return(
        <div className='footer' id='footer'>
           <div className='footer-content'>
              <div className='footer-content-left'>
                  <h1 className='name'>CartBite</h1>
                  <p className='ptag'>CartBite brings your favorite meals to your doorstep — fresh, fast, and delicious. Discover great food from local restaurants and order with just a few clicks!</p>
                  <div className='footer-social-icons'>
                     <img src={assets.facebook_icon} alt=''></img>
                     <img src={assets.twitter_icon} alt=''></img>
                     <img src={assets.linkedin_icon} alt=''></img>
                  </div>
              </div>
              <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
              </div>
              <div className='footer-content-right'>
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@cartbite.com</li>
                  </ul>
              </div>
           </div>
           <hr></hr>
           <p className="footer-copyright">
              Copyright {new Date().getFullYear()} &copy; CartBite - All rights reserved.
           </p>
        </div>
    )
}
export default Footer;
