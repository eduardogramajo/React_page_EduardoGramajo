import ItemList from "./ItemList/ItemList"
// import productos_list from "../productos"
import { useState, useEffect } from 'react'
import Cargando from "../Cargando"
import { useParams } from "react-router-dom"
import {getFirestore} from "../firebase"


const ItemListContainer = (props) => {


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { filtrado, id_filtrado } = useParams()


    const cargaProductos = () => {
        setCargando(true);
        setProductos([]);
    }



    useEffect(() => {
        // let productos_filtrados
        if (id_filtrado != null) {

            cargaProductos()

            if (filtrado === "categoria") {

        const dbQuery = getFirestore()
        dbQuery.collection('productos').where('categoria', '==', id_filtrado).get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setCargando(false))

      } else if (filtrado === "marca") {

        const dbQuery = getFirestore()
        dbQuery.collection('productos').where('marca', '==', id_filtrado).get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setCargando(false))
      } else {
        console.log("No tendría que haber entrado acá")
      }

    } else {  // Si no se aplican filtros, imprime todos los productos.

      const dbQuery = getFirestore()
      dbQuery.collection('productos').get()
        .then(resp => {
          setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() })))
        })
        .catch(err => console.log(err))
        .finally(() => setCargando(false))
    }

    }, [filtrado, id_filtrado])



    return (
        <div>

            < div className="container-fluid row d-flex justify-content-center my-3 text-center">
                {(props !== "") ? <h2>{props.mensaje}</h2> : <h2>{`Filtro: ${filtrado} - ${id_filtrado}`}</h2>}
                <h1>NUESTROS PRODUCTOS</h1>
            </div>

            <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
                {cargando ? (<Cargando />) : <ItemList items={productos} />}
            </div>


        </div>

    )

}

export default ItemListContainer

