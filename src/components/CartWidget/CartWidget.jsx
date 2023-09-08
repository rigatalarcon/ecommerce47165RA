import cart from './assets/carrito2.svg'
import { useCart } from '../../Context/CartContext'


const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget