import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <section className='f-wrapper flexjustifyCenter'>
        <div className="f-container paddings innerWidth flexCenter">
            {/* left side */}
            <div className="f-left flexColStart">
                <img src="./logo2.png" alt=""  />
                <span className='secondaryText'>Our Vision Is To Make All Poeple
                <br />
                The Best Place To Live For Them</span>
            </div>
            {/* Right side */}
            <div className="f-right flexColStart">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>102H RoseLine 23A Islamabad, Pakistan</span>
                <div className="f-menu flexCenter">
                    <span className='secondaryText'>Property</span>
                    <span className='secondaryText'>Services</span>
                    <span className='secondaryText'>Product</span>
                    <span className='secondaryText'>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer