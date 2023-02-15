import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../components/data';

function ProductPage() {
    const { productId } = useParams()

    const product = data.find((product) => product.id === productId || {})
    const {coverImg, title} = product

    return(
        <div>
            <h1>{title}</h1>
            <img src={coverImg} alt={title}/>
        </div>
    )
}

export default ProductPage;