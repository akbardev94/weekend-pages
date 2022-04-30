import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import pathHelp from '../assets/image/path-help.svg';
import heroHelp from '../assets/image/hero-help.svg';
import iconArrow from '../assets/image/icon-arrow.svg';

function HelpWithAxios() {
  const [help, setHelp] = useState( [] );

    useEffect(() => {
      const axiosHelp = async() => {
        const response = await axios(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`);
        setHelp(response.data);
      };
      axiosHelp();
    }, []);

    const useAxiosHelp = help.map((helps)=> {

      return <div key={helps.id} className="card">
                <div className="card-body card-style-help">
                  <img src={helps.image} alt={helps.slug} className="card-img" />
                  <div className="card-img-overlay">
                        <h5 className="card-title card-title-bg text-title-help">{helps.title}</h5>
                        <a href="/#">
                            <img src={iconArrow} alt="Icon-Arrow" className="float-end icon-arrow" />
                        </a>
                  </div>
                </div>
              </div>                    
          })

        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

        return (
          <section className="help-section">
              <img src={pathHelp} alt="Path-Help" className=" float-end path-help animate__animated animate__bounceIn" />
              <div className="container-fluid mt-5 mb-5 help-container">
                  <div className="row d-flex justify-content-center animate__animated animate__fadeIn">
                      <div className="col-6">
                      <h2 className="mt-4 mb-4 text-light fw-bolder"> Help & Tips </h2>
                      <Slider {...settings}>
                            { help && useAxiosHelp }
                      </Slider>
                      </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 animate__animated animate__fadeInUp">
                    <div className="col-lg-6 text-lg-center text-start">
                        <h2 className="mt-4 mb-4 text-light fw-bolder"> You’re all set. </h2>
                      <p className="fs-5 text-light">The wise man therefore always holds in these matters to this principle of selection. </p>
                    </div>
                  </div>
                  <img src={heroHelp} alt="Hero-Help" className="img-fluid float-start hero-help animate__animated animate__rotateInDownLeft" />
              </div>
          </section>
        );
  }

export default HelpWithAxios;

