import React from 'react'
import "../getStarted/getStarted.css";

const GetStarted = () => {
  return (
    <div className="g-wrapper flexjustifyCenter">
        <div className="g-container paddings innerWidth flexjustifyCenter">
            <div className="inner-container flexColCenter">
                <span className='primaryText'>Get Started With Homyz  </span>
                <span className='secondaryText'>Subscribe and Find Super Attractive Price Qoutes From Us
                <br />
                Frind Your Residence Soon</span>
                <button className='button'>
                    <a href="mailto:asgharkhattak789@gmail.com">
                        Get Started
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted