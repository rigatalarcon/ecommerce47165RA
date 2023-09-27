import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        
    }

    return (
        <div onClick={handleClick}>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}}/>
            <p>Precio: $ {price}</p>
            <Link to={`/detail/${id}`} >Ver Detalle</Link>
            
        </div>
    )
}

export default Item