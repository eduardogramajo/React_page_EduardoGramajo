import { useContext } from "react"
import { Context } from "../context/CartContext"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

const CartItem = ({ id, titulo, precio, img, cantidad, subtotal }) => {

    const { onDelete } = useContext(Context)

    return (
        <Container className="mb-4">
            <Card className="" style={{ width: '100%' }}>
                <Row className='no-gutters'>
                    <Col className="col-sm">
                        <Card.Img className="rounded" variant="top" src={img} alt={titulo} style={{ width: "100%" }} />
                    </Col>
                    <Col className="col-lg">
                        <Card.Body>
                            <Row>
                                <Container className="col align-self-start">
                                    <Card.Title>{titulo}</Card.Title>
                                </Container>
                            </Row>
                            <Row>
                                <Col className="col-sm" >
                                    <Card.Text>Precio unitario</Card.Text>
                                    <Card.Text className="p-2">$ {precio}</Card.Text>
                                    <Card.Text className="text-muted">Cantidad: {cantidad}</Card.Text>
                                </Col>
                                <Col className="col-sm">
                                    <Card.Text>Subtotal</Card.Text>
                                    <Card.Text className="p-2"><strong>$ {subtotal}</strong></Card.Text>
                                    <Button variant="danger bg-gradient" onClick={() => onDelete(id, cantidad, precio)}>Eliminar producto</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}


export default CartItem
