import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='heroSection2'>
        <div className="imageHeroSection">
            <img src="https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-845.jpg?w=740&t=st=1697705234~exp=1697705834~hmac=edfd0fe53bd17995332f1362640b9a4c6129e9773a48ad1093fecc007b812489" alt="" />
        </div>
        <div className="heroSectionHeader">
            <h1>Servers You can <span className='heroSecTrustSpan'>Trust</span></h1>
            <p>Experience unparalled security, transparency, and efficiency with us, a revolutionary document storage and sharing platform built with the help of blockchain</p>
        </div>
        <div className="buttonSectionsHero">
            <div className="getStartedHeroDivBtn"><button>Get Started</button></div>
            <div className="aboutUsHeroDivBtn"><button>About Us</button></div>
        </div>
        <div className="newLineHeroAfter"></div>
    </div>
  )
}

export default Hero