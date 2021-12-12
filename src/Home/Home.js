import React, {useEffect } from 'react';
import Section from '../About/Section'
import Service from '../Section/Service'
import Skill from '../Section/Skill' 
import Testimonal from '../Section/Testimonal'
import Brand from '../Section/Brand'
import Counter from '../Section/Counter'
import Footer from '../Footer/Footer'
import AOS from 'aos';


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600
  });
  window.scrollTo(0, 0)
  }, []);


    return (
      <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <div className="main-wrapper">
       
        <div className="section tech-hero-section" style={{backgroundImage: 'url(images/banner/10.jpg)'}}>
          <div className="shape-1" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="hero-content">
                  <h3 className="sub-title aos-init aos-animate" data-aos-anchor-placement="bottom-bottom" data-aos-delay={600} data-aos="fade">Technology Releted Consultancy</h3>
                  <h2 className="title aos-init aos-animate" data-aos="fade-up" data-aos-delay={700}>We bring great Ideas to businesse</h2>
                  <p className="aos-init aos-animate" data-aos="fade-up" data-aos-delay={800}  >We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                  <div className="hero-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay={900}>
                    <a className="btn" href="/about">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service/>
        <Section/>     
        <Skill/>
       <Counter/>
      </div>
      <div className="section features-section" style={{backgroundImage: 'url(images/bg/features-bg.jpg)'}}>
        <div className="features-thumb d-flex align-items-end">
          <div className="shape-1">
            <img src="images/features-shape.png" alt="" />
          </div>
          <div className="image">
            <img src="images/features-img.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="features-wrap">
            <div className="row">
              <div className="col-xl-7 offset-xl-5">
                <div className="features-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title">Why Choose Us</h3>
                    <h2 className="title">We provide truly prominent IT solutions for your success</h2>
                  </div>
                  <div className="features-content">
                    <ul>
                      <li className="features-item">
                        <div className="features-icon">
                          <img src="images/features-1.png" alt="" />
                        </div>
                        <div className="features-text">
                          <h3 className="title">Expert Team</h3>
                          <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img src="images/features-2.png" alt="" />
                        </div>
                        <div className="features-text">
                          <h3 className="title">Quality Contro</h3>
                          <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img src="images/features-3.png" alt="" />
                        </div>
                        <div className="features-text">
                          <h3 className="title">Integration</h3>
                          <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img src="images/features-4.png" alt="" />
                        </div>
                        <div className="features-text">
                          <h3 className="title">24/7 Support</h3>
                          <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                      </li>
                    </ul>
                    <div className="features-link">
                      <p>This is only glimpse see <a href="#">All Features</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonal/>
      <Brand/>
      <div className="section cta-section">
        <div className="container">
          <div className="cta-wrap" style={{backgroundImage: 'url(images/bg/cta-bg.jpg)'}}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta-left">
                  <h2 className="title">Let's make something beautiful together</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-right">
                  <span className="number"><a href="tel:+91 8181886137" style={{color: '#fff'}}>+91 8181886137</a></span>
                  <a className="btn" href="">See More Services</a>
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

export default Home
