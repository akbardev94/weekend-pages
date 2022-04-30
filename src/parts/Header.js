import React from 'react';
import Logo from '../assets/image/logo-weekends.svg';

export default function Header() {
  return (
       <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid navbar-logo">
              <div className="row">
                <div className="col-3"> 
                  <a className="navbar-brand" href="/#">
                    <img src={Logo} alt="" width="50" height="50" className="d-inline-block align-text-top">
                    </img>
                  </a>
                </div>
                <div className="col-6">
                    <span className="float-start">Good Morning<span className="float-start fw-bold fs-5 lh-1 ">Fellas</span></span>                
                </div>             
              </div>
            </div>
      </nav>
  )
}
