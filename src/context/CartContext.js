import React, { useState } from 'react'

const Context = React.createContext()


const CartFunction = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)


    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        if (!itemExiste) {
            setCart([...cart,
            {
                id: producto.id,
                titulo: producto.titulo,
                precio: producto.precio,
                imagen: producto.img,
                cantidad: cantidad,
                subtotal: producto.precio*cantidad
            }]
            )
            setUnidades(unidades+1)
            setTotal(total+(producto.precio*cantidad))
        } else {
            const newCart = cart.map((item) => {
                if (item.id === producto.id) {
                    item.cantidad += cantidad
                    item.subtotal += (producto.precio*cantidad)
                }
                return item
            })

            setCart(newCart)
            setTotal(total+(producto.precio*cantidad))
        }
    }

    const onDelete = (id, cantidad, precio) => {
        const filterCart = cart.filter((producto) => producto.id !== id)
        setCart(filterCart)
        setTotal(total-(cantidad*precio))
    }

    const clearCart = () => {
        setCart([])
        setUnidades(0)
        setTotal(0)
    }

    return <Context.Provider value={{ cart, unidades, total, onAdd, onDelete, clearCart }}>
        {children}
    </Context.Provider>
}

export { CartFunction, Context }