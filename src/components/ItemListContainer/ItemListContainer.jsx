import { useState, useEffect, memo } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where ('category', '==', categoryId))

        getDocs(productRef)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const fields = doc.data()

                    return { id: doc.id, ...fields}
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <main style={{ background: 'orange'}} onClick={() => 
        console.log('itemlistcontainer')}>
            
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemListMemo products={products}/> : <h1>No hay productos disponibles</h1> }
        </main>
    )
}

export default ItemListContainer