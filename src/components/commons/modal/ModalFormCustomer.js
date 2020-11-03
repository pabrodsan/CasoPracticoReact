import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const ModalForm = ({isOpen, toggle, acctionData, data, handleInputChange}) => {

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}/>
        <ModalBody>
          <FormGroup>
            <Label for="CustomerName">Customer Name</Label>
            <Input type="customerName" name="customerName" id="customerName" value={data.customerName} onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
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