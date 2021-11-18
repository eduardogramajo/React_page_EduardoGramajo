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


    // const cargaProductos = () => {
    //     setCargando(true);
    //     setProductos([]);
    // }



    useEffect(() => {
        // let productos_filtrados
        if (id_filtrado) {
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('id_filtrado', '==', id_filtrado).get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))

            // productos_filtrados = () => {
            //     return new Promise((resolve, reject) => {

            //         cargaProductos()

            //         setTimeout(() => {
            //             if (filtrado === "categoria") {

            //                 const productos_categoria = productos_list.filter(producto => producto.categoria === id_filtrado)
            //                 resolve(productos_categoria)
            //             } else if (filtrado === "marca") {

            //                 const productos_marca = productos_list.filter(producto => producto.marca === id_filtrado)
            //                 resolve(productos_marca)
            //             }
            //             else {
            //                 console.log("No tendría que haber entrado acá")
            //             }
            //         }, 2000)
            //     })
            // }
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))
        }
        //     productos_filtrados = () => {
        //         return new Promise((resolve, reject) => {

        //             cargaProductos()

        //             setTimeout(() => {
        //                 resolve(productos_list)
        //             }, 2000)
        //         })
        //     }
        // }

        // productos_filtrados().then((item) => {
        //     setProductos(item)
        //     setCargando(false)
        // })

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

