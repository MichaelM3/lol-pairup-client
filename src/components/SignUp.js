import React from 'react';

const SignUp = (props) => {

  return (
    <>
      <label>SignUp</label>
      <form onSubmit={props.handleSignUpSubmit}>
        <input
          onChange={props.handleFormInputs}
          type="text"
          name="signUpFormName"
          placeholder="Username"
        />
        <input
          onChange={props.handleFormInputs}
          type="password"
          name="signUpFormPassword"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )

}

export default SignUp;
