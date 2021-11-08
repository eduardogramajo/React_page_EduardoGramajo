import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="container-fluid fondo">
            <div>
                <div>
                    <Link to="/">
                        <img src="img/imgSitio/LOGO.png" width="50%" height="auto" class="imgLogo"
                            alt="ALCHEMISTSTORE" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header