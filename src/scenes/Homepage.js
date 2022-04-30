import React from 'react';
import Hero from '../assets/image/hero.svg';
import heroSide from '../assets/image/hero-side.svg';
import pathOval from '../assets/image/path-oval.svg';
import Buttons from '../elements/Buttons';

export default function Homepage() {
  return (
    <section className="bg-home">
      <div id="hero-section" className="container-fluid">
        <div className="row animate__animated animate__fadeInDown">
          <div className="col hero">
            <h1 className="fw-bolder text-light hero-title"> WEEKEND FROM HOME </h1>
              <h4 className="mb-4 text-light"> Stay active with a little workout. </h4>
              <img src={Hero} alt="Hero" className="img-hero animate__animated animate__zoomIn" />
              <Buttons />
          </div>
        </div>
      </div>
      <img src={heroSide} alt="Hero-Side" className="float-end hero-side animate__animated animate__fadeInRight" />
      <div className="container-fluid text-weekend">
          <div className="row mt-4 d-flex justify-content-center animate__animated animate__fadeIn">
              <div className="col-lg-6 text-end">
                <p className="fw-bold fs-5"><span className="text-primary">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
                <p className="fs-5 fst-italic fw-bold text-light">- weekend team</p>
              </div>
          </div>
      </div>
      <img src={pathOval} alt="Path-Oval" className=" float-start path-oval animate__animated animate__bounce" />
    </section>
  )
}
