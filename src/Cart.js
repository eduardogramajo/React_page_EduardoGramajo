import { Container, Button } from 'react-bootstrap'
import React, { useContext } from "react"
import { Context } from "./context/CartContext"
import CartItem from "./CartItem/CartItem"

const Cart = () => {
    const { cart, total, clearCart } = useContext(Context)


    if (cart.length === 0) {
        return (
            <Container>
                <h3>El Carrito esta vacio</h3>
            </Container>
        )
    }
    return (
        <div>
            <Container className="container align-top justify-content-center p-2 text-center ">
                <Container>
                    {cart.map((producto) =>
                        <CartItem
                            key={`cart-${producto.id}`}
                            id={producto.id}
                            titulo={producto.titulo}
                            precio={producto.precio}
                            imagen={producto.img}
                            cantidad={producto.cantidad}
                            subtotal={producto.subtotal}
                        />
                    )}
                </Container>
                <Container>
                    <h2>TOTAL:$ {total}</h2>
                    <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                    <Button className="vaciar">Finalizar Comprar</Button>
                </Container>
            </Container>
        </div >
    )
}

export default Cart
