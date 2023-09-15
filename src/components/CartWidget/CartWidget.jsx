import cart from '../CartWidget/assets/carrito2.svg'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <button>
            <img src={cart}/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget