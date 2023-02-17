import data from '../components/data';
import '../components/modal.css'
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom'

function Cart() {
    const { cartItems, getTotalAmount } = useContext(ShopContext);

    const totalAmount = getTotalAmount()

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
            {totalAmount > 0 ? 
            <div className='checkout'>
                <p>Subtotal: ${totalAmount}</p>
                <Link to='/shop'>
                    <button>Continue Shopping</button>
                </Link>
                <button>Check Out</button>
            </div> 
            : <h1>Your Cart is Empty</h1>  
            }
            
        </div>
    )
}

export default Cart;