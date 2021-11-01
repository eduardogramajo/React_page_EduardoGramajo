import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

const App = () => {

    const  user = "Eduardo"

    return (
        <>
            <div className="container-fluid">

                <Header/>

                <NavBar/>

                <ItemListContainer mensaje={`Bienvenido ${user} a Alchemist Store tu mundo coleccionable`}/>

                <ItemDetailContainer/>

                <Footer/>

            </div>
        </>
    )
}

export default App