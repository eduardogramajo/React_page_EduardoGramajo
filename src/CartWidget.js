import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

const CartWidget = () => {
    return (
        <div>
            <Nav as={Link} to="/cart">
                <span className="material-icons carrito" >
                    shopping_cart
                </span>
            </Nav>
        </div>
    )
}

export default CartWidget

