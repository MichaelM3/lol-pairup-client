import React from 'react';

const LogIn = (props) => {

  return (
    <>
      <label>Login</label>
      <form onSubmit={props.handleLogInSubmit}>
        <input
          onChange={props.handleFormInputs}
          type="text"
          name="logInFormName"
          placeholder="Username"
        />
        <input
          onChange={props.handleFormInputs}
          type="password"
          name="logInFormPassword"
          placeholder="Password"
        />
        <input type="Submit"/>
      </form>
    </>
  )
}

export default LogIn;
