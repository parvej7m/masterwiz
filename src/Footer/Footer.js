import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Footer(){

const[url,seturl]=useState([]);
const[profile,setprofile]=useState([]);
const[image,setimage]=useState([]);

useEffect(() => {
  axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/menu-content`)
  .then(res => {
 seturl(res.data.data.MenuContent)
  }).catch(err => console.log(err))
},[]);

useEffect(() => {
  axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/company-profile`)
  .then(res => {
 setprofile(res.data.data.Contact[0]);

 var dat = res.data.data.Contact[0].image;
 var strrep = dat.replace('https://www.kavitadentalclinic.com/masterwiz_admin/uploads/logo','');
 setimage(strrep);
  }).catch(err => console.log(err))
},[]);


    return (
        <div className="section footer-section" style={{backgroundImage: 'url(images/bg/footer-bg.jpg)'}}>
        <div className="container">
          <div className="footer-widget-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget-about">
                  <a className="footer-logo" href="/"><img src={"https://www.kavitadentalclinic.com/masterwiz_admin/public/uploads/logo/"+image} alt="Logo" /></a>
                  <div className="widget-info">
                    <ul>
                      <li>
                        <div className="info-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="info-text">
                          <span><a href={"tel:"+profile.mobile}>{profile.mobile}</a></span>
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <i className="far fa-envelope-open" />
                        </div>
                        <div className="info-text">
                          <span><a href={"mailto:"+profile.email}>{profile.email}</a></span>
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <i className="fa fa-globe" />
                        </div>
                        <div className="info-text">
                          <span>{profile.address}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Useful Links</h4>
                  <div className="widget-link">
                    <ul className="link">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/product">Products</a></li>
                      <li><a href="/client">Client</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Our Services</h4>
                  <div className="widget-link">
                    <ul className="link">
                       {url.map((urls, index)=>
                          <li><a href={"/services/"+index}>{urls.title}</a></li>
                        )}  
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Support</h4>
                  <div className="widget-link">
                    <ul className="link">
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">FAQS</a></li>
                      <li><a href="#">Download</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area">
          <div className="container">
            <div className="footer-copyright-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright-text">
                    <p>© Copyrights 2021 All rights reserved. </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="copyright-social" style={{color: '#fff'}}>
                    <p>Designed By <i className="bx bx-heart" /> <a href="https://www.wilcoxit.com/" target="_blank">Wilcox IT Solutions</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer
