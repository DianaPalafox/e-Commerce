import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../components/data';
import '../components/cards.css'

function ProductPage() {
    const { productId } = useParams()

    const product = data.find((product) => product.id == productId)

    return(
        <div className='product-card'>
            <div>
                <div className='cover-img'>
                    <img className='product-img' src={product.coverImg} alt={product.title}/>   
                </div>
            </div>
            <div className='product-info-container'>
                <div className='product-info'>
                    <h1 className='title'>{product.title}</h1>
                    <p className='price'>${product.price}</p>
                </div>
                <input type='number' min="0"></input>
                <div className='cart-buttons'>
                    <button>ADD TO CART</button>
                    <button>INSTANT CHECKOUT </button>
                </div>  
            </div>
        </div>
    )
}

export default ProductPage;