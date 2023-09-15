import cart from '../CartWidget/assets/carrito2.svg'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()
    const navigate = useNavigate

    return (
        <button onClick={() => navigate('/cart')}>
            <img src={cart}/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget