import React from 'react'
import "./Cards.css"

const CardUI = (props) => {
    return (
        <div className = "card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="BookCover" className="card-img-top" style={{height:"250px"}}/>
            </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title}</h4>
               <p className="card-text text-secondary">
                    {props.about}
               </p>
               <a href="/" className="btn btn-outline-success" style={{marginBottom:"25px"}}>{props.button}</a>
           </div>

        </div>    

    )
}

export default CardUI
