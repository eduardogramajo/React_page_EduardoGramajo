import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul className="menu">
        <Link to="/"><li><a href="#">HOME</a></li></Link>
        <Link to="/info"><li><a href="#">INFO</a></li></Link>
        <Link to="/contacto"><li>CONTACTO</li></Link>
        <CartWidget />
      </ul>
    </nav>
  )
}

export default NavBar