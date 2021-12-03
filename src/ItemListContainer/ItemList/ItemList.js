import Item from '../Item/Item'


const ItemList = ({ items }) => {

  return (
    <div className="container-fluid">
      <div className="row">
        {
          items.map((producto) =>
            <Item key={producto.id}
              id={producto.id}
              titulo={producto.titulo}
              precio={producto.precio}
              imagen={producto.img}
              stock={producto.stock} />
          )}
      </div>
    </div>
  )

}

export default ItemList
