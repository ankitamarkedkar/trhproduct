import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Signup() {
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

  const [cpasswordType, setCPasswordType] = useState("cpassword");
  const [cpasswordInput, setCPasswordInput] = useState("");
  const handleCPasswordChange = (evnt) => {
    setCPasswordInput(evnt.target.value);
  };
  const toggleCPassword = () => {
    if (cpasswordType === "cpassword") {
      setCPasswordType("text");
      return;
    }
    setCPasswordType("password");
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
                      
                        <p className="mb-0">Create your <Link to="" className="logocolor">TheRapidAnalyzer</Link> account - For Free </p>
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
                          <div className="col-12">
                            <label for="inputConfirmPassword" className="form-label">
                              Enter Confirm Password
                            </label>
                            <div className="input-group">
                              <input
                                type={cpasswordType}
                                onChange={handleCPasswordChange}
                                value={cpasswordInput}
                                name="confirmpassword"
                                className="form-control"
                                placeholder="Confirm Password"
                              />

                              <button
                                className="input-group-text bg-transparent"
                                onClick={toggleCPassword}
                              >
                                {cpasswordType === "password" ? (
                                  <i className="bx bx-show"></i>
                                ) : (
                                  <i className="bx bx-hide"></i>
                                )}
                              </button>
                            </div>
                            
                          </div>
                          
                         
                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bxs-lock-open"></i>Sign Up
                              </button>
                            </div>
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
