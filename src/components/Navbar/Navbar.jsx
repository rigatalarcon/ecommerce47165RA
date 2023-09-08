import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Ecommerce</h1>
            <section>
                <NavLink to='/category/celular' className={({ isActive }) => isActive ? classes.active : classes.inactive }>Celulares</NavLink>
                <NavLink to='/category/tablet' className={({ isActive }) => isActive ? classes.active : classes.inactive }>Tablets</NavLink>
                <NavLink to='/category/notebook' className={({ isActive }) => isActive ? classes.active : classes.inactive }>Notebooks</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar