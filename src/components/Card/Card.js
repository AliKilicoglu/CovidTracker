import React from 'react'
import './card.css'
import 'twin.macro'
import CountUp from 'react-countup';

export const Card = ({value,text,classname}) => {
    return (
        <div className="container">
            <div className={classname}>
        
            
                <h1 className="bold-text">{text}</h1>
                <CountUp className={"light-text-big"} start={0} end={value} duration={2.75} separator="," />
    
           
            </div>
        </div>
     
    )
}
export default Card;