import { useContext } from "react"
import { Context } from "../context/CartContext"
import { Container, Card, Button, Row, Col } from 'react-bootstrap'


const CartItem = ({ id, titulo, imagen, precio, cantidad, subtotal }) => {

    const { onDelete } = useContext(Context)

    return (
        <Container className="mb-4">
            <Card className="card p-3 bg-light rounded-3 detalleDos" style={{ width: '100%' }}>
                <Row className='no-gutters'>
                    <Col className="col-sm">
                        <Card.Img className="rounded" variant="top" src={imagen} alt={titulo} style={{ width: "50%" }} />
                    </Col>
                    <Col className="col-lg">
                        <Card.Body>
                            <Row>
                                <Container className="col align-self-start">
                                    <Card.Title><h3 className="tituloFig">{titulo}</h3></Card.Title>
                                </Container>
                            </Row>
                            <Row>
                                <Col className="col-sm" >
                                    <Card.Text><h5>PRECIO UNITARIO</h5></Card.Text>
                                    <Card.Text className="p-2">$ {precio}</Card.Text>
                                    <Card.Text><h5>CANTIDAD: {cantidad}</h5></Card.Text>
                                </Col>
                                <Col className="col-sm">
                                    <Card.Text><h5>SUBTOTAL</h5></Card.Text>
                                    <Card.Text className="p-2"><h4>$ {subtotal}</h4></Card.Text>
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
