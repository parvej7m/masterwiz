import React from 'react'

function Notfound() {
    return (
        <div>
            <div className="main-wrapper">      
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/4.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">oops!</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">404- Page Not Found</li>
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

export default Notfound
