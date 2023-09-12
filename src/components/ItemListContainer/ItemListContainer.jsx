import { useState, useEffect, memo } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [title, setTitle] = useState('Primer titulo')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(result => {
            setProducts(result)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Segundo titulo')
        }, 3000)
    }, [])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <main style={{ background: 'orange'}} onClick={() => console.log('itemlistcontainer')}>
            <h1>{title}</h1>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemListMemo products={products}/> : <h1>No hay productos disponibles</h1> }
        </main>
    )
}

export default ItemListContainer