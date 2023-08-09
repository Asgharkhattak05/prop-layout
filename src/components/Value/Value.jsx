import React, { useState } from 'react'
import "react-accessible-accordion"
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from "react-icons/md";
import "../Value/Value.css";
import data from"../../utils/accordion"
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";


const Value = () => {
  return (
   <div className="  v-wrapper flexjustifyCenter">
    <div className="padddings innerWidth flexCenter v-container">
       {/* left side */}
       <div className="v-left flexCenter">
        <div className="image-container">
            <img src="./value.png" alt=""  />
        </div>
       </div>
       {/* right side */}
       <div className="v-right flexColStart">
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value We Give To You</span>
        <span className='secondaryText'>We Always Ready To Help By Providing The Best Services For You 
        <br/>
        We Believe A Good Balance To Live Can Make You Life Better
        </span>
        <Accordion 
        className='accordion'
        allowMultipleExpanded={false}
        preExpanded={[0]} 
        >
         {
            data.map((item, i)=>{
               
                return(
                    <AccordionItem className={"AccordionItem"} key={i} uuid={i} >
                     <AccordionItemHeading>
                        <AccordionItemButton className=' flexCenter accordionButton'>
           
                            <div className='flexCenter icon'>
                                {item.icon}
                            </div>
                            <span className='primaryText'>
                                {item.heading}
                            </span>
                            <div className='flexCenter icon'>
                                <MdOutlineArrowDropDown size={20} />
                            </div>
                        </AccordionItemButton>
                     </AccordionItemHeading>
                     <AccordionItemPanel>
                        <p className='secondaryText'>
                            {item.detail}
                        </p>
                     </AccordionItemPanel>
                    </AccordionItem>
                )
            })
         }

        </Accordion>
       </div>
    </div>
   </div>
  )
}

export default Value