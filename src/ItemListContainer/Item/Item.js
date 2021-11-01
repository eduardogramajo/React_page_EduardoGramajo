import { Container, Card} from "react-bootstrap"
import ItemCount from "../../ItemCount"

const Item = ({id, titulo, precio, imagen, stock }) => {
    return (
        <Container key={id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
            <Card className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3 figureBorde" variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title className="text-center titArt">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                    <ItemCount stock={stock} initial={1} />
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Item
