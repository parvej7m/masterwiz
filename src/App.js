import React from 'react'
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Notfound from './Home/Notfound';
import About from './About/About';
import Product from './Product/Product';
import Operation from './Solution/Operation';
import Client from './Client/Client';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import {Routes ,Route} from 'react-router-dom';

function App() 
{
  
  return (
    <div >
  <Menu/>
   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Notfound/>}/> 
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/operation" element={<Operation />} />
        <Route exact path="/services/:id" element={<Services />} />
        <Route exact path="/client" element={<Client />} />
        <Route exact path="/contact" element={<Contact />} />  
     </Routes>
      
     
    </div>
  );
}

export default App;
