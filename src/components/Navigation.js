import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navigation = () => {
    const cartStyle = {
        background: 'gray',
        display: 'flex',
        padding: '3px 5px',
        borderRadius: '7px'
    }
    const { cart } = useContext(CartContext);
    return (
        <>
            <nav className="container mx-auto flex items-centre justify-between py-4">
                <Link to="/">
                    <img className="mr-50" style={{ height: 70 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-centre">
                    <li> <Link to="/">Home</Link></li>
                    <li className="ml-4"><Link to="/products">Products</Link></li>
                    <li className="ml-4">
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span>{cart.totalItems}</span>
                                <img className="ml-3" style={{ height: 37 }} src="/images/cart.png" alt="cart" />
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation;