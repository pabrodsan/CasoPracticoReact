import React, {useState} from 'react';
import { Button, Form, Card } from 'react-bootstrap';
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
    <div className="containerForm">
      <Card className="formStyle">
        <text className={"title"}>Please sign in</text>
        <Card.Body>
          <Form.Group>
            <text for="Email">Email</text>
            <Form.Control placeholder="example@gmail.com" invalid={validData} type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group >
            <text for="Password">Password</text>
            <Form.Control invalid={validData} type="password" name="password" id="password" value={data.password} onChange={handleInputChange} />
          </Form.Group>
            <Button type="submit" target="true" onClick={onSubmit} className={"buttonSignIn"} color="primary">Sign in</Button>
          </Card.Body>
      </Card>
    </div>
  );
}

export default Formulario;