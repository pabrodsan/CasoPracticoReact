import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange}) => {

  return (
    <div>
      <Modal show={isOpen} onHide={toggle}>
        <Modal.Header toggle={toggle}/>
        <Modal.Body>
          <Form.Group>
            <text for="ProductName">Product name</text>
            <Form.Control type="productName" name="productName" id="productName" value={data.productName} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <text for="Price">Price ($)</text>
            <Form.Control type="number" name="price" id="price" value={data.price} onChange={handleInputChange}/>
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