import { Link } from "react-router-dom"
import { Nav, Container } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react"
import { Context } from "./context/CartContext"

const CartWidget = () => {

    const { unidades } = useContext(Context)

    return (
        <div>
            <Container>
                <div className="btn btn-lg p-3">
                    <Nav as={Link} to="/cart">
                        <FaShoppingCart className="carrito" />
                        {unidades > 0 ?
                            (<div>
                                <h4>{unidades}</h4>
                            </div>)
                            :
                            <></>
                        }
                    </Nav>
                </div>
            </Container>
        </div>
    )
}

export default CartWidget

