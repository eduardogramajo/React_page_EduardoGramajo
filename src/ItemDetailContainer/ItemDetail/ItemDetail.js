import {Card, Button} from "react-bootstrap"
import ItemCount from "../../ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({imagen, titulo, precio, stock, descr}) => {
    return (
        <div>
            <Card className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3 imgSet" variant="top" src={imagen} style={{ width: "45%"}} />
                <Card.Body>
                    <Card.Title className="text-center titArtDos">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                    <Card.Text className="text-center titArt">{descr}</Card.Text>
                    <ItemCount stock={stock} initial={1} />
                    <Button variant="primary" as={Link} to={'/'}>VOlVER</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
