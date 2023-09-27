import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
import ContactForm from '../ContactForm/ContactForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()


    const createOrder = async ({nombre, telefono, correo}) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: telefono,
                    email: correo
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const { docs } = await getDocs(productsRef)

            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const { id: orderId } = await addDoc(orderRef, objOrder)
                batch.commit()
                clearCart()                
                setOrderId(orderId)

            } else {
                alert (<h1>Hay productos fuera de stock...</h1>);
            }
        } catch (error) {
            alert (<h1>Ocurrio un error al obtener datos</h1>);
            
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        alert(<h1>Se esta generando su orden...</h1>);
    }

    return (
        <>
            <h1>Checkout</h1>
            <ContactForm createOrder={createOrder}/>            
            {orderId && <h1> El Id de su compra es {orderId}</h1>}
        </>
    )
}

export default Checkout