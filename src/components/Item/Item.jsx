import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {


    //const navigate = useNavigate()
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('item')
    }


    return (
        <div onClick={handleClick}>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}}/>
            <p>Precio: u$s {price}</p>
            <Link to={`/detail/${id}`} >Ver Detalle</Link>
            {/* <button onClick={() => navigate('/detail')}>Detalle</button>*/}
        </div>
    )
}

export default Item