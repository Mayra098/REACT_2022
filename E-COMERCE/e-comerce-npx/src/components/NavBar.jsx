import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {


  return (
    
        
    <div >
<ul className='menu'>

<li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
  <CartWidget></CartWidget>
  </ul>
   </div>

      
    
        
  );
};

export default NavBar;
