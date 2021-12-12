import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { NavLink} from 'react-router-dom';

function Menu() {

  const[menu,setmenu]=useState([]);
  const[url,seturl]=useState([]);
  const[profile,setprofile]=useState([]);
  const[image,setimage]=useState([]);
 
    useEffect(() => {
      axios.get(`https://www.kavitadentalclinic.com/masterwiz_admin/api/menu`)
      .then(res => {
     setmenu(res.data.data.manage_menu[0])
     console.log(res.data)
      }).catch(err => console.log(err))
  },[]);

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
        <div id="header" className="section header-section transparent-header sticky">
              <div className="container">
              <div className="header-wrap">
                <div className="header-logo">
                  <NavLink to="/"><img src={"https://www.kavitadentalclinic.com/masterwiz_admin/public/uploads/logo/"+image} alt="" /></NavLink>
                </div>
                <div className="header-menu d-none d-lg-block">
                  <ul className="main-menu">
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to ='/about' >About</NavLink>
                    </li>
                    <li><NavLink to="#">Products <i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><ul className="sub-menu">
                        <li><NavLink to="/product">Software Publishing</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="#">Solution <i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><ul className="sub-menu">
                        <li><NavLink to="/operation">Operations Management</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="">{menu.name}<i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><ul className="sub-menu">
                        {url.map((urls, index)=>
                          <li><a href={"/services/"+index}>{urls.title}</a></li>
                        )}  
                      </ul>
                    </li>
                    <li><NavLink to="/client">Client</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                </div>
                <div className="header-meta">
                  <div className="header-info d-none d-md-flex">
                    <div className="info-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="info-text">
                      <span>Free Consultant</span>
                      <span className="number"><a href={"tel:"+profile.mobile}>{profile.mobile}</a></span>
                    </div>
                  </div>
                  <div className="header-toggle d-lg-none">
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
              <div className="offcanvas-header">
                <div className="header-logo">
                  <NavLink to="/"><img src="images/logo1.png" alt="" /></NavLink>
                </div>
                <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="fa fa-times" /></button>
              </div>
              <div className="offcanvas-body">
                <div className="offcanvas-menu">
                  <ul className="main-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li><NavLink to="#">Products <i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><span className="menu-expand" /><ul className="sub-menu">
                        <li><a href ="/product">Software Publishing</a></li>
                      </ul>
                    </li>
                    <li><NavLink to="#">Solution <i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><span className="menu-expand" /><ul className="sub-menu">
                        <li><a href="/operation">Operations Management</a></li>
                      </ul>
                    </li>
                    <li><NavLink to="#">{menu.name}<i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><span className="menu-expand" /><ul className="sub-menu">
                      {url.map((urls, index)=>
                          <li><a href={"/services/"+index}>{urls.title}</a></li>
                        )}  
                      </ul>
                    </li>
                    <li><a href="/client">Client</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
              <div className="offcanvas-header">
                <div className="offcanvas-logo">
                  <NavLink to="/"><img src="assets/images/logo1.png" alt="" /></NavLink>
                </div>
                <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="fa fa-times" /></button>
              </div>
              <div className="offcanvas-body">
                <div className="offcanvas-menu">
                  <ul className="main-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">Aboute Us</a>
                    </li>
                    <li><a href="#">Products <i className="fa fa-caret-down" aria-hidden="true" /></a>
                      <span className="menu-icon" /><ul className="sub-menu">
                        <li><a href="/product">Software Publishing</a></li>
                      </ul>
                    </li>
                    <li><NavLink to="#">Solution <i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
                      <span className="menu-icon" /><ul className="sub-menu">
                        <li><a href="/operation">Operations Management</a></li>
                      </ul>
                    </li>
                    <li><a href="#">{menu.name}<i className="fa fa-caret-down" aria-hidden="true" /></a>
                      <span className="menu-icon" /><ul className="sub-menu">
                      {url.map((urls, index)=>
                          <li><a href={"/services/"+index}>{urls.title}</a></li>
                        )}  
                      </ul>
                    </li>
                    <li><a href="/client">Client</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>      
        </div>
             
    )
}

export default Menu
