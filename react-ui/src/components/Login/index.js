import React, { useCallback, useEffect, useState } from 'react';

import useSignUpForm from '../../hooks/useSignUpForm/index';


// import './App.css';

function Login() {
  const [username, setUsername] = useState("blah");


  const signup = () => {
    alert(`User created! Username: ${inputs.username}`);
  }

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);


  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   alert(`Your username is ${username}`);
  // }

  // const [message, setMessage] = useState(null);
  // const [isFetching, setIsFetching] = useState(false);
  // const [url, setUrl] = useState('/api');

  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       setMessage(json.message);
  //       setIsFetching(false);
  //     }).catch(e => {
  //       setMessage(`API call failed: ${e}`);
  //       setIsFetching(false);
  //     })
  // }, [url]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchData();
  // }, [fetchData]);

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
                    value={inputs.username}
                    onChange={handleInputChange} 
                    className="form-control login-form" 
                    placeholder="Enter Username Here" 
                  />

                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-sm-12">
                <div className="card login-label">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} 
                    className="form-control login-form" 
                    placeholder="Enter Password Here"
                  />
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-signup"
                  type="submit"
                  // disabled={this.state.loading}
                  // onClick={this.handleLogIn}
                  >
                  {/* {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                    )} */}
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
