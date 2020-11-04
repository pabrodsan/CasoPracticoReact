import React from 'react'
import { Alert } from 'react-bootstrap';
import { mensajeErrorAxio } from '../utils/constants';

const AlertError = (setShow) => {
    // const [show, setShow] = useState(true);
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
            {mensajeErrorAxio}
        </p>
      </Alert>
    );
}
export default AlertError

  