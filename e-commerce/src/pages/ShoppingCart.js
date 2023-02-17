import data from '../components/data';
import '../components/shopping-cart.css'
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom'

function Cart({ open, onClose  }) {
    const { cartItems, getTotalAmount } = useContext(ShopContext);

    const totalAmount = getTotalAmount()
    
    if(!open) return null; 

    const items = data.map((item) => {
        if(cartItems[item.id] !== 0) {
            return (<CartItem 
            key={item.id}
            id={item.id}
            img={item.coverImg}
            title={item.title}
            price={item.price}
            />
            )
        }
    })

    return(
        <>
        <div className='overlay'/>
        <div className="shopping-cart">
            <button className='close-btn' onClick={onClose}>X</button>
            <div>
                <h1 className='cart-text-one'>Your Cart Items</h1>
            </div>
            <div className='shopping-cart-items'>
            <div className='cart-items-container'>
                <div className='cart-items'>{items}</div>
            </div>
            {totalAmount > 0 ? 
            <div className='checkout'>
                <p className='subtotal'>Subtotal: ${totalAmount}</p>
                <div className='checkout-buttons'>
                    <Link to='/shop'>
                        <button className='shop-btn'>Continue shopping</button>
                    </Link>
                    <button className='check-btn'>Check Out</button>
                </div>
            </div> 
            : <h1 className='cart-text-two'>Your cart is empty</h1>  
            }
            </div> 
        </div>
        </>
    )
}

export default Cart;