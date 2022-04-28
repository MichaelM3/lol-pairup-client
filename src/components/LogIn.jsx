import React from 'react';
import { Form, Input, Button, Header } from 'semantic-ui-react'

const LogIn = (props) => {

  return (
    <div align="center" className="login" >
      <Header style={{paddingRight: "5%", fontFamily: "fantasy"}}>Login</Header>
      <Form onSubmit={props.handleLogInSubmit}>
        <Input
          onChange={props.handleFormInputs}
          type="text"
          name="logInFormName"
          placeholder="Username"
        />
        <Input
          onChange={props.handleFormInputs}
          type="password"
          name="logInFormPassword"
          placeholder="Password"
        />
        <Button type="Submit">Submit</Button>
      </Form>
    </div>
  )
}

export default LogIn;
