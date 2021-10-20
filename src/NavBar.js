import CartWidget from "./CartWidget"

const NavBar = () =>{
    return(
        <nav>
                <ul className="menu">
                  <li><a href ="#">FIGURAS</a></li>
                  <li><a href ="#">LIBROS</a></li>
                  <li><a href ="#">CONTACTO</a></li>
                  <CartWidget/> 
                </ul>
        </nav>
    )
}

export default NavBar