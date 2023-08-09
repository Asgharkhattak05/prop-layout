import React from 'react'
import "../Contact/Contact.css";
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter}  from "react-icons/hi2"

const Contact = () => {
  return (
    <section className='c-wrapper flexjustifyCenter'>
        <div className="r-container paddings innerWidth flexCenter">
            {/* left side */}
            <div className="c-left flexColStart">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy To Contact Us</span>
                <span className='secondaryText'>We Always Ready To Help By Providing The Best Services For You 
                <br/>
                We Believe A Good Balance To Live Can Make You Life Better
                </span>
                <div className="contactModes flexColStart">
                    {/* first row */}
                    <div className="row flexStart">
                    {/* first Mode */}
                      <div className="mode flexColCenter">
                        <div className="flexStart">
                            <div className="icon flexCenter">
                             <MdCall size={25} />
                            </div>
                            <div className="details flexColStart">
                                <span className='primaryText'>
                                    Call
                                </span>
                                <span className='secondaryText'>
                                    +92 318 1964151
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                      </div>
                      {/* second Mode */}
                      <div className="mode flexColCenter">
                        <div className="flexStart">
                            <div className="icon flexCenter">
                             <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="details flexColStart">
                                <span className='primaryText'>
                                    Chat 
                                </span>
                                <span className='secondaryText'>
                                    +92 340 3467360
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                      </div>
                    </div>
                    {/* second Row */}
                    <div className="row flexStart">
                    {/* Third Mode */}
                      <div className="mode flexColCenter">
                        <div className="flexStart">
                            <div className="icon flexCenter">
                             <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="details flexColStart">
                                <span className='primaryText'>
                                   Video Call
                                </span>
                                <span className='secondaryText'>
                                    +21 123 678 38
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                      </div>
                      {/* Fourth Mode */}
                      <div className="mode flexColCenter">
                        <div className="flexStart">
                            <div className="icon flexCenter">
                             <HiChatBubbleBottomCenter size={25} />
                            </div>
                            <div className="details flexColStart">
                                <span className='primaryText'>
                                    Message 
                                </span>
                                <span className='secondaryText'>
                                    +091 123 678 38
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                      </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt=""  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact