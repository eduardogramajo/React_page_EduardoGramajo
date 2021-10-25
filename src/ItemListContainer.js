import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    return (
        <div>
            <h2>{props.mensaje}</h2>

            <ItemCount stock = "5" initial = "1" />
            <ItemCount stock = "0" initial = "1"/>
        </div>

    )
}

export default ItemListContainer

