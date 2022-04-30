import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

export default class Testimony extends Component {
        state = {
            testimony: []
        };

    componentDidMount() {
        axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/testimonial`)
        .then( res => {
            const testimony = res.data;
            this.setState({
                testimony
            })
        })
    }


    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
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
          <section className="testimony-section">
              <div className="container-fluid mt-3 mb-5">
                  <div className="row d-flex justify-content-center animate__animated animate__fadeInDown">
                      <div className="col-6 testimony-container">
                      <h2 className="mt-4 mb-4 text-light fw-bolder"> Testimonial </h2>
                      <Slider {...settings}>
                          { this.state.testimony.map( testi => 
                                <div key={testi.id} className="card">
                                    <div className="card-body card-style-testimony">
                                        <h5 className="card-title fw-bold card-title-testimony">{testi.by}</h5>
                                        <p className="card-text card-text-testimony">{testi.testimony}</p>
                                    </div>
                                </div>
                                )
                          }
                      </Slider>
                      </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 animate__animated animate__fadeInDown">
                      <div className="col-lg-6">
                      <h2 className="text-light fw-bolder text-pov"> POV </h2>
                      <p className="fs-5 text-light text-pov">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                      </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 animate__animated animate__fadeInDown">
                      <div className="col-lg-6">
                      <h2 className="text-light fw-bolder text-resource"> Resource </h2>
                      <p className="fs-5 text-light text-resource">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best </p>
                      </div>
                  </div>
              </div>
          </section>
        );
      }
}

