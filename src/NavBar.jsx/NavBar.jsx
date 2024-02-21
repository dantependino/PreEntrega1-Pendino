import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h2>Ecomerce</h2>
            <div>
                <button>categoria1</button>
                <button>categoria2</button>
                <button>categoria3</button>
            </div>
            <CartWidget/>
        </nav>
    )

}
export default NavBar;