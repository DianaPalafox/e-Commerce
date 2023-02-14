import React from "react";
import './cards.css'

function Card({ img, title, price }){
    return(
        <div className="cards">
            <img src={img} className='card-image' alt="" />
            <div className="card-info">
                <p>{title}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Card;