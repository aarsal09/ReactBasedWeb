import React from 'react'
import './Carousel.css'
import slide1 from './iphone-15-lineup.jpeg.webp'

export default function Carousel() {
  return (
    <div class="container">
      <div class="buttonLeft">
          <button>  </button>
      </div>
      <div class="slide1">
          <img src= {slide1} alt="No Image Available" srcset=""/>
      </div>
      <div class="buttonRight">
          <button>  </button>
      </div>
    </div>
  )
}
