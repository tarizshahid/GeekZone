import React from 'react'
import FAQs from '../FAQs/FAQs'
import './Footer.css'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import { faFacebook, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <>
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>GeekZone</h4>
  	 			<ul>
  	 				<li><a href="#">About us</a></li>
  	 				<Link to="/FAQs" component={RouterLink} >
					   <li>FAQs</li>
                    </Link>

  	 				<li>    <a href="https://wa.me/923002209985" target="_blank" rel="noopener noreferrer">Contact Us </a></li>
  	 				<li><a href="#">Go to Top</a></li>
  	 			</ul>
  	 		</div>
  	 	
  	 		<div className="footer-col">
  	 			<h4>Categories</h4>
  	 			<ul>
  	 				<li><a href="#">Gaming</a></li>
  	 				<li><a href="#">Health</a></li>
  	 				<li><a href="#">Drones</a></li>
  	 				<li><a href="#">Mobile</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/geekzone/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://www.twitter.com/geekzone/"><i className="fab fa-twitter"></i></a>
					<br/>
  	 				<a href="https://www.instagram.com/geekzone/"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://www.linkedin.com/geekzone/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			   <div className="footer-col">
				<div className="footer-bottom">
					<br/>
					<p>copyright &copy;2022 GeekZone.  <br/>All Rights Reserved</p>
					<br/> <p>FAST NUCES - Chiniot Campus 35400 <br/>	 0300-1234567 </p>
					
				</div>
			</div>
  	 	</div>
  	 </div>
  </footer>


    
  
  
  </>;
};

export default Footer;
