import ItemDetail from "./ItemDetail/ItemDetail"
import productos_list from "../productos"
import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import Cargando from "..//Cargando"

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
        <div className="itemDetailContainer">
            <div className="container justify-content-center display-flex p-2 text-center">

                {/* Si se esta cargando se muestra el mensaje, sino se muestra el ItemDetail */}

                <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">

                    <h2>Item elegido:{producto.titulo}</h2>

                    {cargando ? <Cargando /> : (
                        <ItemDetail
                            key={`detail-${producto.id}`}
                            id={producto.id}
                            titulo={producto.titulo}
                            descr={producto.descr}
                            precio={producto.precio}
                            imagen={producto.img}
                            stock={producto.stock}
                        />)}

                </div>
            </div>
        </div>        
    )
}

export default ItemDetailContainer
