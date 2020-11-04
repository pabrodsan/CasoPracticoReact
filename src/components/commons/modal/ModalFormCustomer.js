import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange}) => {

  return (
    <div>
      <Modal show={isOpen} onHide={toggle}>
        {/* <Modal.Header toggle={toggle}/> */}
        <Modal.Body>
          <Form.Group>
            <text for="CustomerName">Customer Name</text>
            <Form.Control type="customerName" name="customerName" id="customerName" value={data.customerName} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <text for="Email">Email</text>
            <Form.Control type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => acctionData(data)}>Ok</Button>
          <Button variant="secondary" onClick={toggle}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;