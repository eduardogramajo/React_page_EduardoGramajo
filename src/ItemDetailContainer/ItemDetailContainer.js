import ItemDetail from "./ItemDetail/ItemDetail"
import productos_list from "../productos"
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos_list)
                }, 4000)
            })
        }
        getItem()
            .then((item) => {
                const producto = item.find((producto => producto.id === "7"))
                setProducto(producto)
                setCargando(false)
            })
    }, [])



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
                    <span className="visually-hidden">Loading...</span>
                </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="l"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button></> : (
                    < div >
                        <h2>ITEM SELECCIONADO</h2>
                        <ItemDetail id={producto.id} titulo={producto.titulo} precio={producto.precio} imagen={producto.img} stock={producto.stock} descr={producto.descr} />
                    </div>
                )}
        </>
    )
}

export default ItemDetailContainer
