import ItemCount from "../ItemCount"
import ItemList from "./ItemList/ItemList"
import productos from "../productos"


const ItemListContainer = (props) => {
    
    return (
        <div>
            <h2>{props.mensaje}</h2>

            <ItemCount stock = "5" initial = {1} onAdd={function(){alert("Gracias por tu compra")}} />
            <ItemCount stock = "1" initial = {1} onAdd={function(){alert("Gracias por tu compra")}}/>
            <ItemList items ={productos}/>
        </div>

    )
}

export default ItemListContainer

