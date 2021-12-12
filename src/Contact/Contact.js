import React,{useState,useEffect} from 'react'
import Footer from '../Footer/Footer'
import axios from 'axios';


export default function Contact() {

  const[profile,setprofile]=useState([]);
  
  useEffect(() => {
    axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/company-profile`)
    .then(res => {
  setprofile(res.data.data.Contact[0])
    }).catch(err => console.log(err))
    window.scrollTo(0, 0)
  },[]);

    return (
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        <div className="main-wrapper">
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/8.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">Contact Us</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section contact-info-section section-padding-02">
            <div className="container">
              <div className="contact-info-wrap">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info text-center">
                      <div className="info-icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="info-content">
                        <h5 className="title">Telephone</h5>
                        <p><a href={"tel:"+profile.mobile}>{profile.mobile}</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info text-center">
                      <div className="info-icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="info-content">
                        <h5 className="title">Mail Address</h5>
                        <p><a href={"mailto:"+profile.email}>{profile.email}</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info text-center">
                      <div className="info-icon">
                        <i className="fa fa-globe" />
                      </div>
                      <div className="info-content">
                        <h5 className="title">Location</h5>
                        <p> {profile.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section contact-form-section section-padding">
            <div className="container">
              <div className="contact-wrap">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="form-title text-center">
                      <h2 className="title">Get Support from our Team</h2>
                    </div>
                    <div className="contact-form-wrap">
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single-form">
                              <input className="form-control" type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <input className="form-control" type="email" placeholder="Your Email" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <input className="form-control" type="text" placeholder="Your Number" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-form">
                              <input className="form-control" type="text" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-form">
                              <textarea className="form-control" placeholder="Write A Message" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-btn text-center">
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
          <div className="section contact-map-section">
            <div className="contact-map-wrap">
              <iframe width="100%" height={300} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=varanasi%20Varanasi+(varanasi)&t=&z=12&ie=UTF8&iwloc=B&output=embed" /> <a href="https://bachelorthesiswritingservice.com/">bachelorthesiswritingservice.com</a> <img src="//stats.symptoma.com/matomo.php?idsite=1&rec=1&action_name=Chatbot&url=https://www.symptoma.com/chatbot&urlref=" alt="" style={{border: '0px'}} />
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
