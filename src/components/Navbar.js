import React from 'react'
import './Navbar.css'
import './Carousel.css'
import logo from './applelogo copy.jpeg'
export default function Navbar() {
  return (
    <>
    <nav class="navBar">
        <div>
            <img class="logo" src={logo} alt="?"/>
        </div>
        <div class="company-search">
            <input type="text" placeholder="Search . . ."/>
            <button type="submit">Search</button>
        </div>
        <div class="navElements">
            <a href="/">Login</a>
            <a href="/">Liked Items</a>
            <a href="/">Cart</a>
        </div>
    </nav>
    <nav class="subMenu">
        <div class="navElements">
            <a href="/">Phone</a>
            <a href="/">Laptop</a>
            <a href="/">Desktop</a>
            <a href="/">Wearables</a>
            <a href="/">Fitness Gadgets</a>
            <a href="/">Refurbished</a>
        </div>
    </nav>
    </>
  )
}
