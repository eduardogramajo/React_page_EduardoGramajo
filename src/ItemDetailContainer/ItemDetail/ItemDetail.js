import {Card, Button} from "react-bootstrap"
import ItemCount from "../../componentes/ItemCount"
import { Link } from "react-router-dom"
import {useState, useContext} from "react"
import { Context } from "../../componentes/context/CartContext"

const ItemDetail = ({id, imagen, titulo, precio, stock, descr}) => {
    
    
    const [compra, setCompra] = useState(false)
    const { onAdd } = useContext(Context)

    const adding = (props) =>{ 
        setCompra(true)
        onAdd({id, titulo, precio, imagen }, props.unidades)
    }

    return (
        <div>
            <Card className="card p-3 bg-light rounded-3 detalle">
                <Card.Img className="rounded-3 imgSet" variant="top" src={imagen} style={{ width: "25%"}} />
                <Card.Body>
                    <Card.Title className="text-center titArtDos">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>$ {precio}</strong></Card.Subtitle>
                    <Card.Text className="text-center titArt">{descr}</Card.Text>
                    {!compra ? <ItemCount stock={stock} initial={1} onAdd={adding} />  : <Button as={Link} to="/cart" variant="danger">TERMINAR COMPRA</Button>}
                    <Button variant="primary" className="botonVolver" as={Link} to={'/'}>VOlVER</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
