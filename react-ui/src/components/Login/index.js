import React, { useCallback, useEffect, useState } from 'react';

import useSignUpForm from '../../hooks/useSignUpForm/index';


function Login() {

  // Callback which is passed to useSignUpForm
  const signup = () => {
    alert(`Login Received! Username: ${inputs.username}`);
  }

  // Destructuring for clarity
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

  return (
    <div className="App">
      <div>
        Login time
      </div>
      <form onSubmit={handleSubmit}>
          <div className="form-group">

            <div className="row">
              <div className="col-sm-12">
                <div className="card login-label">

                  <label htmlFor="username">Username</label>
                  <input 
                    type="text" 
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleInputChange} 
                    className="form-control login-form" 
                    placeholder="Enter Username Here" 
                  />

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card login-label">

                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleInputChange} 
                    className="form-control login-form" 
                    placeholder="Enter Password Here"
                  />

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-signup"
                  type="submit"
                  >
                  <span> Log In</span>
                </button>
              </div>
            </div>

          </div>
        </form>
    </div>
  );

}

export default Login;
