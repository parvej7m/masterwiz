import React, {useEffect } from 'react';
import Counter from '../Section/Counter'
import Section from '../About/Section'
import Testimonal from '../Section/Testimonal'
import Brand from '../Section/Brand'
import Footer from '../Footer/Footer'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div className="main-wrapper">
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/5.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">About Us</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Section/>
          <div className="section service-section service-section-5">
            <div className="container">
              <div className="service-wrap">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-item about-service-item text-center">
                      <div className="shape-1" />
                      <div className="shape-2">
                        <img src="images/service/s-shape-2.png" alt="" />
                      </div>
                      <div className="service-icon">
                        <img src="images/service/service-1.png" alt="" />
                      </div>
                      <div className="service-content">
                        <h3 className="title"><a href="#">Software Publishing</a></h3>
                        <p>Software publishers disseminate licenses to customers for the right to execute software on their own computers.Operators in this industry market and distribute software products and may also design the software.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-item about-service-item text-center">
                      <div className="shape-1" />
                      <div className="shape-2">
                        <img src="images/service/s-shape-2.png" alt="" />
                      </div>
                      <div className="service-icon">
                        <img src="images/service/service-2.png" alt="" />
                      </div>
                      <div className="service-content">
                        <h3 className="title"><a href="#">Ready-made non-customized Software</a></h3>
                        <p>Non-Customized Software means non-customized off-the-shelf software that is so licensed solely in executable or object code form pursuant to a nonexclusive, internal use software license.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-item about-service-item text-center">
                      <div className="shape-1" />
                      <div className="shape-2">
                        <img src="images/service/s-shape-2.png" alt="" />
                      </div>
                      <div className="service-icon">
                        <img src="images/service/service-3.png" alt="" />
                      </div>
                      <div className="service-content">
                        <h3 className="title"><a href="#">Operating Systems Software</a></h3>
                        <p>An operating system is a software programme required to manage and operate a computing device like smartphones, tablets, computers, cars, network towers, smartwatches etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section skill-section skill-section-2">
            <div className="container">
              <div className="skill-wrap">
                <div className="skill-content-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="skill-content-left">
                        <div className="experience">
                          <h2 className="number">5+</h2>
                          <span>Years of experience</span>
                        </div>
                        <h3 className="title">We run all kinds of <span>IT services</span> that vow your success</h3>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="skill-content-right">
                        <h3 className="title">Accelerate innovation with world-class tech teams We’ll match you to an entire remote technology</h3>
                        <div className="skill-bar-wrap">
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">IT Managment</h5>
                              <span className="skill-percentage">
                                <span className="counter">90</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={90} style={{width: '90%'}} />
                              </div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">Data Security</h5>
                              <span className="skill-percentage">
                                <span className="counter">100</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={100} style={{width: '100%'}} />
                              </div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">Solution</h5>
                              <span className="skill-percentage">
                                <span className="counter">100</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={100} style={{width: '100%'}} />
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
          </div>
         <Counter />
         <Testimonal/>
         <Brand/>
          <div className="section contact-section contact-section-2 section-padding" style={{backgroundImage: 'url(images/bg/ab-contact.jpg)'}}>
            <div className="container">
              <div className="contact-wrap">
                <div className="row">
                  <div className="col-xl-5 col-lg-6">
                    <div className="contact-info">
                      <h3 className="info-title">Need a Quick Query?</h3>
                      <ul>
                        <li>
                          <div className="contact-info-item d-flex align-items-center">
                            <div className="contact-info-icon">
                              <i className="fa fa-phone" />
                            </div>
                            <div className="contact-info-text">
                              <h4 className="title">Contact Number</h4>
                              <p>1234567890</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="contact-info-item d-flex align-items-center">
                            <div className="contact-info-icon">
                              <i className="fa fa-envelope" />
                            </div>
                            <div className="contact-info-text">
                              <h4 className="title">Our Mail</h4>
                              <p>infotechmax@ourmail.com</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="contact-info-item d-flex align-items-center">
                            <div className="contact-info-icon">
                              <i className="fa fa-globe" />
                            </div>
                            <div className="contact-info-text">
                              <h4 className="title">Our Location</h4>
                              <p>varanasi</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="contact-form">
                      <div className="contact-form-wrap">
                        <div className="heading-wrap text-center">
                          <span className="sub-title">Leave us massage</span>
                          <h3 className="title">How May We Help You!</h3>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="single-form">
                                <input type="text" placeholder="Name *" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="single-form">
                                <input type="email" placeholder="Email *" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="single-form">
                                <input type="text" placeholder="Subject *" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="single-form">
                                <textarea placeholder="Write A Message" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-btn">
                                <button className="btn" type="submit">Send Message</button>
                              </div>
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
         <Footer/>
          <div className="progress-wrap">
          </div>
        </div>
        <grammarly-desktop-integration data-grammarly-shadow-root="true" />
      </div>
    )
}

export default About
