import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import Spinner from 'react-bootstrap/Spinner'
import { Button } from 'react-bootstrap'



const ItemList = ({ items }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items)
        }, 2000)
      })
    }
    productos().then((item) => {
      setProductos(item)
      setCargando(false)
    })
  }, [])

  return (
    <>
      {cargando ? <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </> : (
        productos.map((producto) =>
          <Item id={producto.id} titulo={producto.titulo} precio={producto.precio} imagen={producto.img} />
        )
      )
      }
    </>
  )

}

export default ItemList
