import React from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";



export default function Dashboard() {
  return (
    <div>
       <header className="topbar p-3 mb-3 border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="logocolor1 text-decoration-none">
                TheRapidAnalyzer
              </Link>
            </div>
            <div className="col-md-9">
              <div className="dropdown pb-4 userdropdown">
                <Link
                  to="/"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">NAVIN</span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      New project...
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='bg12'>
      <div className='container-fluid'>
       <div className='row'>
        <div className='col-md-2'>
          <Sidebar/>
        </div>
        <div className='col-md-9 col-1 trhpro'>
         <div className='row'>
           <div className='col-md-6'>
           <div className="card">
           <div className="card-body">This is some text within a padded box.</div>
           </div> 
           </div>
           <div className='col-md-6'>
           <div className="card">
           <div className="card-body">This is some text within a padded box.</div>
           </div> 
           </div>
         </div>
         
        </div>
       </div>
      </div>
      </section>
    </div>
  )
}
