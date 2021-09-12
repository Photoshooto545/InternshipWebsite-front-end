import React from 'react';
import "../components/cards.css"


function Cards (props) {
    
        return (
            
            <div className="container1">
            
                <div className="internshipCard">
                    <div className="favicon">
                        <img src={props.image} alt="approve"></img>
                    </div>
                    <div className="step">STEP - {props.step}</div>
                    
                    <div className="info">{props.info}</div>
                    
                    
                </div>
            
                
            </div>
            
        )
}

export default Cards