import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link>
            <section className="Categories">
            <div className="LinksContainer" >
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
            </div>
            </section>
            <CartWidget/>
        </nav>
    )

}
export default NavBar;
