import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">

                <div className='logo'>
                    <a href="http://localhost:3000/home/"> <img src="https://i.ibb.co/XDP09WC/geekzone.jpg" alt="logo" height={55} width={250} href="/" /> </a>
                </div>

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : 'menu-link'}>
                    <ul>
                    <Link to="/Drones" component={RouterLink} >
					   <li>Drones</li>
                  </Link>
                    <Link to="/Gaming" component={RouterLink} >
					   <li>Gaming</li>
                    </Link>
                    <Link to="/Office" component={RouterLink} >
					   <li>Office</li>
                  </Link>
                  <Link to="/Mobile-gadgets" component={RouterLink} >
					   <li>Mobile</li>
                  </Link>
                  <Link to="/Health" component={RouterLink} >
					   <li>Health</li>
                  </Link>
                    
                    
                    </ul>
                </div>

                <div className='search-cart'>
                    <ul>
                        <li className='polj'>
                        <form action="">
                        <input type="search" required/>
                        <i class="fa fa-search"></i>
                        </form>
                        </li>
                        <li>
                            <Link sx={{fontSize: '25px'}} to="/cart" component={RouterLink} variant="body2">
                                <AiOutlineShoppingCart />
                            </Link>
                        </li>
                        <li className='bnm'>
                        <a> 
                            <p>  
                                <Link sx={{fontSize: '18px'}} to="/signin" component={RouterLink} variant="body2">
                                    Login/Register
                                </Link>
                            </p>
                        </a>
                        </li>
                    </ul>

                    <div className="hamburger-menu">    {/* hamburger menu */}
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}> <GiHamburgerMenu /> </a>
                    </div>
                </div>


            </nav>

          
        </>
    )

}

export default Navbar
