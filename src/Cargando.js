import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Cargando = () => {
    return (
        <div>
            <img src="https://res.cloudinary.com/dvsraj89p/image/upload/v1636309355/sharin_lm9da1.gif" alt="" />
            {/* <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="l"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Cargandoo...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="l"
                    role="status"
                    aria-hidden="true"
                />
                Cargandoo...
            </Button> */}
        </div >
    )
}

export default Cargando
