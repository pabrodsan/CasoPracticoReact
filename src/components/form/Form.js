import React, {useState} from 'react';
import { Button, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './form.scss';
const bbdd = [
  {
    email: 'pablors92@gmail.com',
    password: 'pablo123'
  },
  {
    email: 'adrian@hotmail.com',
    password: 'luna321'
  },
  {
    email: 'admin@admin.com',
    password: 'admin'
  }
]

const Formulario = () => {

  const [data, setData] = useState({email: '', password: ''});
  const [validData, setValidData] = useState(undefined)
  const history = useHistory();

  const onSubmit = () => {
    const validate = bbdd.find(e => e.email === data.email && e.password === data.password);
    if (validate) {
      // history.push('/customers');
      history.push('/products');
    } else {
      setValidData(true);
    }
  }

  const handleInputChange = (event) =>{
    setData({...data, [event.target.name]: event.target.value});
  }

  return (
    <div className="container">
      <Card className="form">
        <CardBody>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input invalid={validData} type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup >
            <Label for="Password">Password</Label>
            <Input invalid={validData} type="password" name="password" id="password" value={data.password} onChange={handleInputChange} />
            <Button onClick={onSubmit} color="primary">Aceptar</Button>
          </FormGroup>
          </CardBody>
      </Card>
    </div>
  );
}

export default Formulario;