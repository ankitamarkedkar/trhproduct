import React from "react";
import {Link} from 'react-router-dom';

export default function Forgotpassword() {
  
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
                      <div className="mb-4">
                      
                        <p className="mb-0">Forgotten your password? Enter your registered e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
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
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bxs-lock-open"></i>Reset my password
                              </button><br/>
                              <p className="m-y-1">Please <Link href="/"> contact us</Link> if you have any trouble resetting your password.</p>
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
