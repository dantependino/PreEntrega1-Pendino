import { useContext } from "react"
import {CartContext} from '../context/CartContext'
import CartItem from "../CartItem/CartItem"
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    const handlecheckout = () => {}

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
                <Link to='/'>PRODUCTOS</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout"> checkout </Link>
            
        </div>
    )
}

export default Cart