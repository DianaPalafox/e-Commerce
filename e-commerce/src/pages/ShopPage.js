import React from 'react'
import data from '../components/data';
import Card from '../components/Card';

function ShopPage() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                title={item.title}
                price={item.price}
            />
        )
    })
    return(
        <div>
            <div className='cards-container'>{cards}</div>
        </div>
    )
}

export default ShopPage;