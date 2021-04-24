import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div 
            className='banner' 
            style={{
                backgroundImage: `url('https://asicsulb.org/corporate/images/connect/beachfront/2020-06/awaken-your-creativity-with-netflix-inspired-meals.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
        }}>
            <div className='banner-contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__buttons'>Play</button>
                    <button className='banner__buttons'>My List</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
