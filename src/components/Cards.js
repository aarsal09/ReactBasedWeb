import React from 'react'
import './Cards.css'
import appleImage from './applelogo copy.jpeg';
export default function Cards() {
  return (
    <>
    <div class="cards-container">
        <div class="card">
            <img src={appleImage}  alt="Image Not Available"/>
            <div class="card-body">
                <h5 class="card-title">Apple</h5>
                <p class="card-text">Explore iPads, iPhones, Macs, AirPods and much more.</p>
                <button>Go somewhere</button>
            </div>
        </div>
        <div class="card">
            <img src={appleImage} alt="Image Not Available2"/>
            <div class="card-body">
                <h5 class="card-title">Samsung</h5>
                <p class="card-text">Discover the range of Galaxy Phones and Smart accessories.</p>
                <button>Go somewhere</button>
            </div>
        </div>
        <div class="card">
            <img src={appleImage} alt="Image Not Available3"/>
            <div class="card-body">
                <h5 class="card-title">OnePlus</h5>
                <p class="card-text">Lookout for the latest OnePlus smartphones.</p>
                <button>Go somewhere</button>
            </div>
        </div>
        <div class="card">
            <img src={appleImage} alt="Image Not Available4"/>
            <div class="card-body">
                <h5 class="card-title">HP</h5>
                <p class="card-text">Keep Reinventing. Explore HP range of Laptops.</p>
                <button>Go somewhere</button>
            </div>
        </div>
        <div class="card">
            <img src={appleImage} alt="Image Not Available5"/>
            <div class="card-body">
                <h5 class="card-title">Dell</h5>
                <p class="card-text">Designed for Everyone Needs.</p>
                <button>Go somewhere</button>
            </div>
        </div>
    </div>  
    </>
  )
}
