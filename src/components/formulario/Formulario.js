import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Label } from "reactstrap";

const Formulario = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      <Label>
        {errors.email && errors.email.message}
      </Label>

      <Input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default Formulario;