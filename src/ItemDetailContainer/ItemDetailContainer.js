import ItemDetail from "./ItemDetail/ItemDetail"
import productos_list from "../productos"
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useParams } from "react-router"

const ItemDetailContainer = (titulo) => {


    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const { id_item } = useParams()
    
    console.log(producto)
    
    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const item_search = productos_list.find((prod => prod.id === id_item))
                    resolve(item_search)
                }, 2000)
            })
        }
        getItem()
            .then((prod) => {
                setProducto(prod)
                setCargando(false)
            })
    }, [id_item])


    
    return (
        <>
            {
                cargando ? <><Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="l"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Cargandoo...</span>
                </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="l"
                            role="status"
                            aria-hidden="true"
                        />
                        Cargandoo...
                    </Button></> : (
                    < div >
                        <h2>{titulo}</h2>
                        <ItemDetail key={producto.id} id={producto.id} titulo={producto.titulo} precio={producto.precio} imagen={producto.img} stock={producto.stock} descr={producto.descr} />
                    </div>
                )}
        </>
    )
}

export default ItemDetailContainer
