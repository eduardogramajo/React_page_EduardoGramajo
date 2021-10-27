import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    return (
        <div>
            <h2>{props.mensaje}</h2>

            <ItemCount stock = "5" initial = {1} onAdd={function(){alert("Gracias por tu compra")}} />
            <ItemCount stock = "1" initial = {1} onAdd={function(){alert("Gracias por tu compra")}}/>
        </div>

    )
}

export default ItemListContainer

