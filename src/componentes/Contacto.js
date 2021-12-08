import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

const Contacto = () => {
    return (
        <div>
            <>
                <h1 className="cont">CONTACTO</h1>
                <form className="form">
                    <h4>DEJANOS TU CONSULTA</h4>
                    <label for="GET-name">Nombre y Apellido:</label>
                    <input id="GET-name" type="text" name="name"></input>
                    <label for="GET-email">Email:</label>
                    <input id="GET-email" type="email" name="email"></input>
                    <label for="Description"></label>
                    <h5>Consulta</h5>
                    <textarea rows="5" cols="50" name="Description"
                        id="Description"></textarea>
                    <Button variant="danger bg-gradient mb-4" as={Link} to='/'>ENVIAR</Button>
                </form>

                
            </>
        </div >
    )
}

export default Contacto
