import React from 'react'

function Section() {
    return (
        <div className="section about-section section-padding">
          <div className="container">
            <div className="about-wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-thumb-wrap">
                    <div className="about-thumb-small">
                      <img src="images/about-1.jpg" alt="" />
                    </div>
                    <div className="about-thumb-big">
                      <img src="images/about-2.jpg" alt="" />
                    </div>
                    <div className="about-thumb-shape">
                      <img src="images/ab-shape.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <div className="section-title">
                      <h3 className="sub-title">Who We Are</h3>
                      <h2 className="title">We specialise in helping our customers digitise their business</h2>
                    </div>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    <div className="about-author-list">
                      <div className="about-author">
                        <h4 className="name">Rajesh Pandey</h4>
                        <span className="designation">CEO, Master Wiz</span>
                        <div className="author-img">
                          <img src="images/author-1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="about-list">
                        <ul>
                          <li><i className="fas fa-check" /> <a href="#">Solving complex problems</a></li>
                          <li><i className="fas fa-check" /> <a href="#">We guarantee trusted service.</a></li>
                          <li><i className="fas fa-check" /> <a href="#"> Experts in technology fields</a></li>
                        </ul>
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

export default Section
