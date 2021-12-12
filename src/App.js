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
   
        <Route exact path="/masterwiz/" element={<Home />} />
        <Route path="*" element={<Notfound/>}/> 
        <Route exact path="/masterwiz/about" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/masterwiz/product" element={<Product />} />
        <Route exact path="/masterwiz/operation" element={<Operation />} />
        <Route exact path="/masterwiz/services/:id" element={<Services />} />
        <Route exact path="/masterwiz/client" element={<Client />} />
        <Route exact path="/masterwiz/contact" element={<Contact />} />  
     </Routes>
      
     
    </div>
  );
}

export default App;
