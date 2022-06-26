import React from 'react'
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
        <h1>404 - Page Not Found!</h1>
    <Link to="/"> <h1> Home </h1></Link>
    <Link to="/FAQs">  <h1> Frequently Asked Questions </h1> </Link>
    <a href="https://wa.me/923002209985" target="_blank" rel="noopener noreferrer"><h1> Contact Us</h1> </a>

    </>
  )
}
