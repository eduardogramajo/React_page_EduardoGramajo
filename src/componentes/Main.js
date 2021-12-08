import Header from './Header'
import Footer from './Footer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Cart from './Cart'
import Info from './Info'
import Contacto from './Contacto'
import { Switch, Route } from 'react-router-dom'



const Main = () => {

    

    return (
        <div className="container-fluid">

            <Header />

            <Switch>
                <Route path="/" exact>
                    <ItemListContainer  tit="NUESTROS PRODUCTOS" />
                </Route>

                <Route path="/item/:id_item" exact>
                    <ItemDetailContainer titulo="ITEM SELECCIONADO" />
                </Route>

                <Route path="/:filtrado/:id_filtrado" exact>
                    <ItemListContainer mensaje={""} />
                </Route>

                <Route path="/cart" exact>
                    <Cart titulo="CARRITO" />
                </Route>

                <Route path="/info" exact>
                    <Info />
                </Route>

                <Route path="/contacto" exact>
                    <Contacto />
                </Route>

            </Switch>

            <Footer />

        </div>
    )
}





export default Main
