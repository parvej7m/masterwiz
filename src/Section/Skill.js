import React from 'react';
import { CountUp } from 'use-count-up'


export default function Skill() {

    return (
        <div className="section skill-section section-padding">
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
                              {/* <span className="counter">95</span> */}
                              <CountUp  className="counter" isCounting end={95} duration={5} />

                              %
                            </span>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="progress-line" data-width={95} style={{width: '95%'}} />
                            </div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <div className="skill-header">
                            <h5 className="skill-title">Data Security</h5>
                            <span className="skill-percentage">
                            <CountUp  className="counter" isCounting end={100} duration={5} />
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
                            <CountUp  className="counter" isCounting end={100} duration={5} />
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
              <div className="skill-img-wrap">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="skill-img-item">
                      <div className="skill-img">
                        <a className="image" href="services.php"><img src="images/skill/skill-img-1.jpg" alt="" /></a>
                        <div className="skill-img-text">
                          <h3 className="title"><a href="#">Software Publishing</a></h3>
                          <a className="skill-btn" href="#">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="skill-img-item">
                      <div className="skill-img">
                        <a className="image" href="services.php"><img src="images/skill/skill-img-2.jpg" alt="" /></a>
                        <div className="skill-img-text">
                          <h3 className="title"><a href="#"> Computer Games</a></h3>
                          <a className="skill-btn" href="#">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="skill-img-item">
                      <div className="skill-img">
                        <a className="image" href="services.php"><img src="images/skill/skill-img-3.jpg" alt="" /></a>
                        <div className="skill-img-text">
                          <h3 className="title"><a href="#"> Software Maintenance</a></h3>
                          <a className="skill-btn" href="#">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="skill-img-item">
                      <div className="skill-img">
                        <a className="image" href="services.php"><img src="images/skill/skill-img-4.jpg" alt="" /></a>
                        <div className="skill-img-text">
                          <h3 className="title"><a href="#">Webpage Design</a></h3>
                          <a className="skill-btn" href="#">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

