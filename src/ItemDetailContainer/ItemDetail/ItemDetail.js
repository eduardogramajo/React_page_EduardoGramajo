import {Card} from "react-bootstrap"
import ItemCount from "../../ItemCount"

const ItemDetail = ({id, imagen, titulo, precio, stock, descr}) => {
    return (
        <div>
            <Card key={id} className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3 imgSet" variant="top" src={imagen} style={{ width: "45%"}} />
                <Card.Body>
                    <Card.Title className="text-center titArtDos">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                    <Card.Text className="text-center titArt">{descr}</Card.Text>
                    <ItemCount stock={stock} initial={1} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
