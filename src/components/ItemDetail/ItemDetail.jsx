import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import { Link } from 'react-router-dom'

const InputCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)
    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description, }) => {
    const [inputType] = useState('button')
    const [quantity, setQuantity] = useState(0)
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount
    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        setNotification('error', `Se agregaron correctamente ${quantity} ${name} al carrito`)
        setQuantity(quantity)
    }

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100 }} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail