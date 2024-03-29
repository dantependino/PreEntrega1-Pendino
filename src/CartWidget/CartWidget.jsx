
import cartimg from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'


const CartWidget =() => {
    const {cart} = useContext(CartContext)
    console.log(cart)

    const total = cart.reduce((acc,cartItem) =>
    acc+=cartItem.quantity,0
    
    )

    return (
        <Link to='/cart'>
        <div className='CartWidget'>
            <img src={cartimg} alt= "cart-widget" height={15} width={15} className='CartImg'/>
            {total}
        </div>
        </Link>
    )
}
export default CartWidget