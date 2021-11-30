import React from 'react'
import HeroBanner from '../../assets/images/hero.jpg'

function HomePage() {
    return (
        <div className="home-page">
            <img className="home-page__hero" src={HeroBanner} alt="Hero Banner" />
        </div>
    )
}

export default HomePage
