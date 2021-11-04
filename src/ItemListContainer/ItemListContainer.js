import ItemList from "./ItemList/ItemList"
import productos_list from "../productos"
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const ItemListContainer = (props) => {


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    

    useEffect(() => {
        const articulos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos_list)
                }, 2000)
            })
        }
        articulos().then((item) => {
            setProductos(item)
            setCargando(false)
        })
    }, [])

    return (
        <div>
            <h2>{props.mensaje}</h2>


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
                    < div className="container-fluid row d-flex justify-content-center my-3 text-center">
                        <h1>NUESTROS PRODUCTOS</h1>
                        <ItemList items={productos} />
                    </div>
                )}
        </div>

    )

}

export default ItemListContainer

