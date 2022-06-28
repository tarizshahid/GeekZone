import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
        <div className='navbar-general'>
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
                        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
       
          <Search className='navbarsearch'>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </li>
                        <li className='navbarsearch'>
                            <Link sx={{fontSize: '25px'}} to="/cart" component={RouterLink} variant="body2" className='navbarsearch'>
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

            </div>
        </>
    )

}

export default Navbar
