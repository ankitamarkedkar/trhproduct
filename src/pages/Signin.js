import React, { useState } from "react";
import {Link} from 'react-router-dom';


export default function Signin() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div>
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">

              <div className="col mx-auto">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center mb-4">
                      
                        <p className="mb-0">Login into <Link to="" className="logocolor">TheRapidAnalyzer</Link></p>
                      </div>
                      <div className="d-grid gap-3">
                        <Link to="" className="btn btn-facebook">
                          <i className="bx bxl-facebook"></i>Login with facebook
                        </Link>
                        <Link to="" className="btn btn-google-plus">
                          <i className="bx bxl-google"></i>{" "}
                          <span>Login with google</span>
                        </Link>
                      </div>
                      <div className="login-separater text-center mb-4">
                        {" "}
                        <span>OR SIGN IN WITH EMAIL</span>
                        <div className="divider"></div>
                      </div>
                      <div className="form-body">
                        <form className="row g-4">
                          <div className="col-12">
                            <label for="inputEmailAddress" className="form-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="col-12">
                            <label for="inputChoosePassword" className="form-label">
                              Enter Password
                            </label>
                            <div className="input-group">
                              <input
                                type={passwordType}
                                onChange={handlePasswordChange}
                                value={passwordInput}
                                name="password"
                                className="form-control"
                                placeholder="Password"
                              />

                              <button
                                className="input-group-text bg-transparent"
                                onClick={togglePassword}
                              >
                                {passwordType === "password" ? (
                                  <i className="bx bx-show"></i>
                                ) : (
                                  <i className="bx bx-hide"></i>
                                )}
                              </button>
                            </div>
                            
                          </div>
                          <div className="col-md-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckChecked"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 text-end">
                            {" "}
                            <Link to="/forgotpassword">Forgot Password ?</Link>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bxs-lock-open"></i>Sign in
                              </button>
                            </div>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0">
                              Don't have an account yet?{" "}
                              <Link to="/signup">Sign up here</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
