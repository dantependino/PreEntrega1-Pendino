import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link>
            <div>
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )

}
export default NavBar;
