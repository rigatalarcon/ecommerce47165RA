/* eslint-disable react/prop-types */
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div onClick={() => console.log('item list')}>
            {products.map(product => {
                return (
                    <Item key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default ItemList