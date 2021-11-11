import { Container, Button } from 'react-bootstrap'
import React, { useContext } from "react"
import { Context } from "./context/CartContext"

const Cart = () => {
    const { cart, total, onDelete, clearCart } = useContext(Context)


    if (cart.length === 0) {
        return (
            <Container>
                <h3>Carrito esta vacio</h3>
            </Container>
        )
    }
    return (
        <div>
            <Container className="container align-top justify-content-center p-2 text-center ">
                <Container>
                    {cart.map((producto) =>
                        <div>
                            <h2>titulo:{producto.titulo}</h2>
                            <h3>precio:$ {producto.precio}</h3>
                            <h3>cantidad:{producto.cantidad}</h3>
                            <h3>subtotal:$ {producto.subtotal}</h3>
                            <Button className="botonDelete" onClick={() => onDelete(producto.id)}>Eliminar producto</Button>
                        </div>
                    )}
                </Container>
                <Container>
                    <h2>TOTAL:$ {total}</h2>
                    <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                </Container>
            </Container>
        </div >
    )
}

export default Cart
