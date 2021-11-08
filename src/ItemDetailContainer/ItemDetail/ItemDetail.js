import {Card, Button} from "react-bootstrap"
import ItemCount from "../../ItemCount"
import { Link } from "react-router-dom"
import {useState} from "react"

const ItemDetail = ({imagen, titulo, precio, stock, descr}) => {
    
    const [cant, setCant] = useState(0)
    const [compra, setCompra] = useState(false)

    const onAdd = (props) =>{ 
        setCant(props.unidades)
        setCompra(true)
        alert(`Agregaste ${props.unidades} unidades al carrito`)
    }

    return (
        <div>
            <Card className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3 imgSet" variant="top" src={imagen} style={{ width: "45%"}} />
                <Card.Body>
                    <Card.Title className="text-center titArtDos">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>{precio}</strong></Card.Subtitle>
                    <Card.Text className="text-center titArt">{descr}</Card.Text>
                    {!compra ? <ItemCount stock={stock} initial={1} onAdd={onAdd} />  : <Button as={Link} to="/cart">TERMINAR COMPRA</Button>}
                    <Button variant="primary" className="botonVolver" as={Link} to={'/'}>VOlVER</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
