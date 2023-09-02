import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <h1>Ecommerce</h1>
            <section>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar