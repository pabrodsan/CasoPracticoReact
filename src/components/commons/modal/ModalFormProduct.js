import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange}) => {

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}/>
        <ModalBody>
          <FormGroup>
            <Label for="ProductName">Product name</Label>
            <Input type="productName" name="productName" id="productName" value={data.productName} onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="Price">Price ($)</Label>
            <Input type="number" name="price" id="price" value={data.price} onChange={handleInputChange}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => acctionData(data)}>Ok</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;