import Item from '../Item/Item'


const ItemList = ({ items }) => {

  return (
    <>
      {
        items.map((producto) =>
          <Item id={producto.id} titulo={producto.titulo} precio={producto.precio} imagen={producto.img} stock={producto.stock} />

        )}
    </>
  )

}

export default ItemList
