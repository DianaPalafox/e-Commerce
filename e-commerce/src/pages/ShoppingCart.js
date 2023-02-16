import data from '../components/data';
import '../components/modal.css'
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 
import CartItem from '../components/CartItem';

function Cart() {
    const { cartItems } = useContext(ShopContext);

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
        <div className="shopping-cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cart-items'>{items}</div>
        </div>
    )
}

export default Cart;