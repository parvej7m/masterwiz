import React, {useEffect } from 'react';
import Footer from '../Footer/Footer'

export default function Operation() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
        <meta charSet="utf-8" />
        <div className="main-wrapper">
          <div id="header" className="section header-section transparent-header sticky">
            <div className="container">
            </div>
          </div>  
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    ul li i{\n        font-size: 16px;\n        color: blue;\n    }\n    ul li {\n    padding: 0px 0 3px 30px;\n    background-position: 0px 5px;\n    font-size: 13px;\n    line-height: 20px;\n" }} />
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/6.webp)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">Operations Management</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Solution</li>
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
                          <h3 className="title">We provide all kinds of <span>"Operations Management"</span> </h3>
                        </div>
                        <div className="skill-bar-wrap">
                          <p>
                            So operations managers are responsible for managing activities that are part of the production of goods and services. Their direct responsibilities include managing both the operations process, embracing design, planning, control, performance improvement, and operations strategy. Their indirect responsibilities include interacting with those managers in other functional areas within the organisation whose roles have an impact on operations. Such areas include marketing, finance, accounting, personnel and engineering.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                      <div className="skill-content">
                        <div className="skill">
                          <img src="images/services/9.jpg" alt="" />
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
                      <div className="skill-img">
                        <img src="images/services/7.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <ul>
                        <li><i className="fa fa-check" /><b> Human resource management </b> – The people employed by an organisation either work directly to create a good or service or provide support to those who do. </li>
                        <li><i className="fa fa-check" /><b> Asset management </b> – An organisation's buildings, facilities, equipment and stock are directly involved in or support the operations function </li>
                        <li><i className="fa fa-check" /><b> Cost management </b> – Most of the costs of producing goods or services are directly related to the costs of acquiring resources, transforming them or delivering them to customers </li>
                      </ul>
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
        <grammarly-desktop-integration data-grammarly-shadow-root="true" />
      </div>
    )
}
