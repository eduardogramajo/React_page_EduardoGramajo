import React, { useState } from "react"
import { Button } from 'react-bootstrap'

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock > 0 ? props.stock - props.initial : 0)
    const [unidades, setUnidades] = useState(props.stock > 0 ? props.initial : 0)

    const handleStock = {
        sumaStock: () => {
            if (stock === 0) {
                alert("No hay stock")
            } else {
                setStock(stock - 1)
                setUnidades(unidades + 1)
            }
        },
        restarStock: () => {
            if (unidades === 0) {
                alert("El valor ingresado debe ser mayor a 0")
            } else {
                setStock(stock + 1)
                setUnidades(unidades - 1)
            }
        }
    }

    return (
        <div className="container justify-content-center display-flex col-6 p-2 margen">
            <div className="container d-flex justify-content-around col-8 p-2">
                <button className="btn btn-primary" onClick={handleStock.sumaStock} disabled={stock === "0" && unidades === 0} > + </button>
                <p>{unidades}</p>
                <button className="btn btn-primary" onClick={handleStock.restarStock} disabled={stock === "0" && unidades === 0}> - </button>
            </div>

            <div className="container d-flex justify-content-center">
                <Button variant="primary" onClick={()=>props.onAdd({unidades})} >Agregar al carrito {unidades} unidades</Button>
            </div>
            <div className="container d-flex justify-content-center">
                <p>Stock disponible: {stock}</p>
            </div>

        </div>
    )
}

export default ItemCount
