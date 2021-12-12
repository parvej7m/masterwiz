import React from 'react'

function Counter() {
    return (
        <div className="section counter-section" style={{backgroundImage: 'url(images/bg/counter-bg.jpg)'}}>
        <div className="container">
          <div className="counter-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="images/counter/counter-1.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">354</span>+
                    </span>
                    <p>Completed Projects</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="images/counter/counter-2.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">354</span>+
                    </span>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="images/counter/counter-3.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">99</span>%
                    </span>
                    <p>Web Site Analyse</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="images/counter/counter-4.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">354</span>+
                    </span>
                    <p>Clients Supoort Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Counter
