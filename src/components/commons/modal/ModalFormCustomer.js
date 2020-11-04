import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { textUpdateHeaderCustomer, textAddHeaderCustomer, textAdd, textUpdate } from '../../utils/constants';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange, isUpdate}) => {
  let textHeader = textAddHeaderCustomer
  let textOkButton = textAdd

  if (isUpdate) {
    textHeader = textUpdateHeaderCustomer;
    textOkButton = textUpdate
  }

  return (
    <div>
      <Modal show={isOpen} onHide={toggle}>
      <Modal.Header style={{fontSize: 30, fontWeight: "bold"}} toggle={toggle}>{textHeader}</Modal.Header>
        <Modal.Body>
          <Form.Group>
            <text style={{fontWeight: "bold"}} for="CustomerName">Customer Name</text>
            <Form.Control type="customerName" name="customerName" id="customerName" value={data.customerName} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <text style={{fontWeight: "bold"}} for="Email">Email</text>
            <Form.Control type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => acctionData(data)}>{textOkButton}</Button>
          <Button variant="secondary" onClick={toggle}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;