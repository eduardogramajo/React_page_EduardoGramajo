import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Cargando = () => {
    return (
        <div>
            <Button variant="primary" disabled>
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
            </Button>
        </div >
    )
}

export default Cargando
