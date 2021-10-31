import { Container, Card } from "react-bootstrap"

const Item = ({ titulo, precio, imagen }) => {
    return (
        <Container className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
            <Card className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3" variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title className="text-center">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Item
