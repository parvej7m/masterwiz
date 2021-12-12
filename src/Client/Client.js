import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../Footer/Footer'

function Client() {

    const[client,setclient]=useState([]);
    // const[image,setimage]=useState([]);
   
    useEffect(() => {
      axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/client`)
      .then(res => {
     setclient(res.data.data.Client);


    //  var dat = res.data.data.Client[1].image;
    //  var strrep = dat.replace('https://www.kavitadentalclinic.com/masterwiz_admin/uploads/client/','');
    //  setimage(strrep);
   
      }).catch(err => console.log(err))
      window.scrollTo(0, 0)
  },[]);

    return (
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <div className="main-wrapper">
          
          <div className="section page-banner-section" style={{backgroundImage: 'url(images/banner/9.jpg)'}}>
            <div className="shape-2" />
            <div className="container">
              <div className="page-banner-wrap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner text-center">
                      <h2 className="title">Our Client</h2>
                      <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Our Client</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section team-section our-tem-section section-padding">
            <div className="container">
              <div className="team-wrap our-team-wrap">
                <div className="team-content-wrap">
                  <div className="row">
                  {client.map(detail=>(                   
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="single">
                        <div className="team-img">          
                            <a href="#"><img src={detail.image.replace("https://www.kavitadentalclinic.com/masterwiz_admin/uploads/client/","https://www.kavitadentalclinic.com/masterwiz_admin/public/uploads/client/")} alt="" /></a>                       
                        </div>
                      </div>
                    </div>
                   ))} 
                  </div>     
                </div>
              </div>
            </div>
          </div>
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
                      <span className="number">+44 920 090 505</span>
                      <a className="btn" href="#">See More Projects</a>
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

export default Client
