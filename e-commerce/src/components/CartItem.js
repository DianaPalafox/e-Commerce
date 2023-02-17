import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 

function CartItem({img, title, price, id}) {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    return(
        <div className="cart-item">
            <p>{title}</p>
            <img src={img} alt={title}/>
            <p>${price}</p>
            <div className="count-handler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>

        </div>
    )
}

export default CartItem