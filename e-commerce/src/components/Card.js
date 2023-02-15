import React from "react";
import './cards.css'
import { Link } from 'react-router-dom'


function Card({ img, title, price, id, product }){

    /*const handleClick = (e) => {
        console.log(e.target.id)
    }*/

    return(
        <div className="cards">
            <Link to={`/product/${product.id}`}>
                <img id={id} src={img} className='card-image' alt="" /*onClick={handleClick}*//>
            </Link>
            <div className="card-info">
                <p className="title-card">{title}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Card;