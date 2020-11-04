import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { textUpdateHeaderProduct, textAddHeaderProduct, textAdd, textUpdate } from '../../utils/constants';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange, isUpdate}) => {

  let textHeader = textAddHeaderProduct
  let textOkButton = textAdd

  if (isUpdate) {
    textHeader = textUpdateHeaderProduct;
    textOkButton = textUpdate
  }

  return (
    <div>
      <Modal show={isOpen} onHide={toggle}>
        <Modal.Header style={{fontSize: 30, fontWeight: "bold"}} toggle={toggle}>{textHeader}</Modal.Header>
        <Modal.Body>
          <Form.Group>
            <text style={{fontWeight: "bold"}} for="ProductName">Product name</text>
            <Form.Control type="productName" name="productName" id="productName" value={data.productName} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <text style={{fontWeight: "bold"}} for="Price">Price ($)</text>
            <Form.Control type="number" name="price" id="price" value={data.price} onChange={handleInputChange}/>
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