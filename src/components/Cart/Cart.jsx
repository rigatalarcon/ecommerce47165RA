import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, total } = useCart()

    return (
        <>
            <main>
                <h1>Cart</h1>
                <section>
                    {
                        cart.map(prod => {
                            return (
                                <div key={prod.id} {...prod} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <h1>{prod.name}</h1>
                                    <button onClick={() => removeItem(prod.id)}>remove</button>
                                </div>
                            )
                        })
                    }
                </section>
                <h2>Total: ${total}</h2>
                <Link to='/checkout'>Checkout</Link>
            </main>
        </>

    )
}

export default Cart