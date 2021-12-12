import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../Footer/Footer'
import {useParams} from "react-router-dom"

function Services() {
  const {id}=useParams();
  const[url,seturl]=useState([]);
  const[image,setimage]=useState([]);
 
  useEffect(() => {
    axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/menu-content`)
    .then(res => {
   seturl(res.data.data.MenuContent[id])

   var dat = res.data.data.MenuContent[id].image;

   var strrep = dat.replace('https://www.kavitadentalclinic.com/masterwiz_admin/uploads/MenuContent/','');
   setimage(strrep);
    }).catch(err => console.log(err))
    window.scrollTo(0, 0)
},[]);




    return (
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <div className="main-wrapper">      
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/4.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">{url.title}</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"> Services</li>
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
                          <h3 className="title">{url.title} </h3>
                        </div>
                        <div className="skill-bar-wrap">
                        <div dangerouslySetInnerHTML={{__html: url.about}}/>
                        
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                      <div className="skill-content">
                        <div className="skill">
                          <img src={'https://www.kavitadentalclinic.com/masterwiz_admin/public/uploads/MenuContent/'+image} alt="" />
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

export default Services
