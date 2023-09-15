import { useEffect, useState } from 'react'
//import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, 'products', productId)


        getDoc(productRef)
        .then(documentSnapshot => {
            const fields = documentSnapshot.data()
            const productsAdapted = { id: documentSnapshot.id, ...fields}
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
        //getProductById(productId)
        //   .then(response => {
        //      setProduct(response)
        //  })
        // .catch(error => {
        //      console.log(error)
        //  })
        // .finally(() => {
        //     setLoading(false)
    //})
}, [productId])

if (loading) {
    return <h1>Cargando Producto</h1>
}

return (
    <main style={{ background: 'pink' }}>
        <h1>Detalle del producto</h1>
        <ItemDetail {...product} />
    </main>
)
}

export default ItemDetailContainer