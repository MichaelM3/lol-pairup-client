import React from 'react';
import { Form, Input, Button, Header } from 'semantic-ui-react'

const SignUp = (props) => {

  return (
    <div align="center" className="signup">
      <Header style={{paddingRight: "5%", fontFamily: "fantasy"}}>SignUp</Header>
      <Form onSubmit={props.handleSignUpSubmit}>
        <Input
          onChange={props.handleFormInputs}
          type="text"
          name="signUpFormName"
          placeholder="Username"
        />
        <Input
          onChange={props.handleFormInputs}
          type="password"
          name="signUpFormPassword"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )

}

export default SignUp;
