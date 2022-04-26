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
                        <li><a href="#"> Home   </a></li>
                        <li><a href="#"> Gaming </a></li>
                        <li><a href="#"> Mobile </a></li>
                        <li><a href="#"> Health </a></li>
                        <li><a href="#"> Drones </a></li>
                        <li><a href="#"> Office </a></li>
                    </ul>
                </div>

                <div className='search-cart'>
                    <ul>
                        <li><AiOutlineSearch /></li>
                        <li>
                            <Link sx={{fontSize: '18px'}} to="/cart" component={RouterLink} variant="body2">
                                <AiOutlineShoppingCart />
                            </Link>
                        </li>
                        <a> 
                            <p>  
                                <Link sx={{fontSize: '18px'}} to="/signin" component={RouterLink} variant="body2">
                                    Login/Register
                                </Link>
                            </p>
                        </a>
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
