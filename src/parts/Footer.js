import React from 'react';
import imgVersion from '../assets/image/img-version.svg'

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <p className="text-light fw-bold mt-3">wknd@2020</p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img src={imgVersion} alt="version" className="img-version"/>
                </div>
            </div>
      </div>
    </footer>
  )
}
