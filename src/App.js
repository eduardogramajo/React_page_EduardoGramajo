import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contacto from "./Contacto";
import ItemListContainer from "./ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {

    const user = "Eduardo"

    return (
        <BrowserRouter>
            <div className="container-fluid">

                <Header />

                <NavBar />

                <Switch>
                    <Route path="/" exact>
                        <ItemListContainer mensaje={`Bienvenido ${user} a Alchemist Store tu mundo coleccionable`} />
                    </Route>
                
                    <Route path="/item/:id_item" exact>
                        <ItemDetailContainer titulo="ITEM SELECCIONADO" />
                    </Route>

                    <Route path="/info" exact>
                        <Contacto />
                    </Route>
                    
                    <Route path="/contacto" exact>
                        <Contacto />
                    </Route>

                </Switch>

                <Footer />

            </div>
        </BrowserRouter>
    )
}

export default App