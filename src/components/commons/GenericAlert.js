import React from 'react';
import { Alert } from 'react-bootstrap'
import { textHeading, textBody, textFooter} from '../utils/constants';

const GenericAlert = () => {

    return (
        <Alert variant="danger">
            <Alert.Heading>{textHeading}</Alert.Heading>
            <p>{textBody}</p>
            <hr />
            <p className="mb-0">{textFooter}</p>
        </Alert>
    )
}
export default GenericAlert;