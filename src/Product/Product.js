import React, {useEffect } from 'react';
import Footer from '../Footer/Footer'

function Product() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div className="main-wrapper">
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/7.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">Software Publishing</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section skill-section skill-section-3 skill-section-4 section-padding" style={{paddingBottom: '0px'}}>
            <div className="container-fluid">
              <div className="skill-wrap">
                <div className="skill-content-wrap">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6">
                      <div className="skill-content-right">
                        <div className="section-title2">
                          <h3 className="title">We provide all kinds of <span>"Software Publishing"</span> </h3>
                        </div>
                        <div className="skill-bar-wrap">
                          <p>
                            The Software Publishing industry is engaged primarily in the dissemination of software licenses to customers for the right to execute software on their own computers and other devices. Software publishers typically develop and distribute their own software, as well as support materials and services. Rapid advancement in complementary industries, such as the Semiconductor and Circuit Manufacturing industry (IBISWorld report 33441a) and the Telecommunication Networking Equipment Manufacturing industry (33421), has presented new avenues for software publishers over the five years to 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                      <div className="skill-content">
                        <div className="skill">
                          <img src="images/services/10.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section skill-section skill-section-3 skill-section-4 section-padding">
            <div className="container">
              <div className="skill-wrap">
                <div className="skill-content-wrap">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className="skill-content-left">
                        <div className="skill-img">
                          <img src="images/ddc.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="skill-content-right">
                        <div className="section-title2">
                          <h2 className="title">We specialise in helping our <span>customers digitise</span> their business</h2>
                        </div>
                        <div className="skill-bar-wrap">
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">Performance</h5>
                              <span className="skill-percentage">
                                <span className="counter">90</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={90} />
                              </div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">Customer Satisfaction</h5>
                              <span className="skill-percentage">
                                <span className="counter">90</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={90} />
                              </div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <div className="skill-header">
                              <h5 className="skill-title">Business growth rate</h5>
                              <span className="skill-percentage">
                                <span className="counter">90</span>
                                %
                              </span>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div className="progress-line" data-width={90} />
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
          <Footer/>
          <div className="progress-wrap">
          </div>
        </div>
        <grammarly-desktop-integration data-grammarly-shadow-root="true" />
      </div>
    )
}

export default Product
