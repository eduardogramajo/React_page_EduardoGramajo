import { Container, Card, Button } from "react-bootstrap"
import ItemCount from "../../ItemCount"
import { Link } from "react-router-dom"

const Item = ({ id, titulo, precio, imagen, stock }) => {
    return (
        <Container className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
            <Card key={id} border="primary" className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3 figureBorde figureSize" variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title className="text-center titArt">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                    <ItemCount stock={stock} initial={1} />
                    <Button variant="primary" as={Link} to={`/item/${id}`}>VER MAS</Button>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Item
