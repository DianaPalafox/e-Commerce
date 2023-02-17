import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 
import '../components/shopping-cart.css'

function CartItem({img, title, price, id}) {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    return(
        <div className="cart-item">
            <p className='cart-title'>{title}</p>
            <img className='cart-img' src={img} alt={title}/>
            <div className="count-handler">
                <p className='cart-price'>${price}</p>
                <button className='input-btn' onClick={() => removeFromCart(id)}> - </button>
                <input className='input-cart' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button className='input-btn' onClick={() => addToCart(id)}> + </button>
            </div>

        </div>
    )
}

export default CartItem