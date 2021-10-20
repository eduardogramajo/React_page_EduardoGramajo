import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

const App = () => {

    const  user = "Eduardo"

    return (
        <>
            <div className="container-fluid">

                <Header/>

                <NavBar/>

                <ItemListContainer mensaje={`Bienvenido ${user} a Alchemist Store tu mundo coleccionable`}/>

                <Footer/>

            </div>
        </>
    )
}

export default App