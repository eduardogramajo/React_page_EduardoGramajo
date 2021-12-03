import Main from "./componentes/Main";
import { CartFunction } from "./componentes/context/CartContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <CartFunction>
                <Main />
            </CartFunction>
        </BrowserRouter >
    )
}

export default App