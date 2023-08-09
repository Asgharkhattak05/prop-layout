import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero-wrapper flexjustifyCenter">
        <div className="hero-container paddings innerWidth flexCenter">
              {/* left section */}
              <div className="hero-left flexColStart">
              <div className="orange-circle"></div>
                <div className="hero-title">
                  <motion.h1
                  initial={{y:"2rem", opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{
                    duration:4,
                    type:"spring"
                  }}
                  >
                    Discover <br/> Most  Suitable <br/> Property 
                  </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                  <span className='secondaryText' >Find a Variety of property That Suit You Very Easilty</span>
                  <span className='secondaryText' >Forget All Difficulties in Finding a Residence For You</span> 
                </div>
                <div className="flexCenter search-bar">
                  <HiLocationMarker className='marker'  size={25} />
                  <input type="text" />
                  <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                   <div className="flexColCenter stat">
                    <span><CountUp start={8800} end={9000} duration={5} />
                      <span>+</span> 
                    </span>
                    <span className='secondaryText' >Premium Products</span>
                   </div>
                   <div className="flexColCenter stat">
                    <span><CountUp start={1800} end={2000} duration={4} />
                      <span>+</span> 
                    </span>
                    <span className='secondaryText' >Happy Costumers</span>
                   </div>
                   <div className="flexColCenter stat">
                    <span><CountUp  end={20} duration={3} />
                      <span>+</span> 
                    </span>
                    <span className='secondaryText'>Awards Winning</span>
                   </div>
                </div>
              </div>
              {/* right section */}
              <motion.div className="hero-right flexCenter"
              initial={{x:"7rem",opacity:0}}
              animate={{x:0 , opacity:1}}
              transition={{
                duration:4,
                type:"spring"
              }}
              >
                 <div className="image-container">
                    <img src="./hero-image.png" alt="hero image" srcset="" />
                 </div>
              </motion.div>
        </div>
    </div>
  )
}

export default Hero