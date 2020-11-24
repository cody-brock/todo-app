import React, { useCallback, useEffect, useState } from 'react';

import useSignUpForm from '../../hooks/useSignUpForm/index';


function Signup() {

  // Callback which is passed to useSignUpForm
  const signup = () => {
    alert(`Signup Received! Username: ${inputs.username}, Email: ${inputs.email}`);
  }

  // Destructuring for clarity
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

  return (
    <div className="App">
      <div>
        Signup time
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

                  <label htmlFor="email">Email</label>
                  <input 
                    type="text" 
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleInputChange} 
                    className="form-control login-form" 
                    placeholder="Enter Email Here" 
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
                  <span> Sign Up</span>
                </button>
              </div>
            </div>

          </div>
        </form>
    </div>
  );

}

export default Signup;
