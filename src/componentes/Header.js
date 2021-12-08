import { Link } from "react-router-dom"
import NavBar from './NavBar'

const Header = () => {
    return (
        <header className="container-fluid fondo">
            <div>
                <div>
                    <Link to="/">
                        <img src="https://res.cloudinary.com/dvsraj89p/image/upload/v1638994757/LOGO_j7hucj.png" width="50%" height="auto" className="imgLogo"
                            alt="ALCHEMISTSTORE" />
                    </Link>
                </div>
            </div>
            <NavBar/>
        </header>
    )
}

export default Header