import ItemDetail from "./ItemDetail/ItemDetail"
import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import Cargando from "../componentes/Cargando"
import { getFirestore } from "../firebase"

const ItemDetailContainer = () => {


    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const { id_item } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('productos')
        const item_search = itemCollection.doc(id_item)

        item_search.get().then((doc) => {

            setCargando(true)
            setProducto([])

            if (!doc.exists) {
                console.log('El producto no existe !!')
                return
            }
            setProducto({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log("Error al buscar productos", error)
            alert('El producto no existe')
        }).finally(() => {
            setCargando(false)
        })
    }, [id_item])

    return (
        <div className="itemDetailContainer">
            <div className="container justify-content-center display-flex p-2 text-center">

                {/* Si se esta cargando se muestra el mensaje, sino se muestra el ItemDetail */}

                <div className="container-fluid row  d-flex justify-content-center my-3 text-center tarjetasProductos">

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
