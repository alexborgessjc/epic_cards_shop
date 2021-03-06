import React from 'react';
import {Link} from 'react-router-dom';

function Menu(){
    return (
        <nav className='menu'>            
           <h1 className='menu-title'>Epic Cards Shop</h1>
           <ul className='menu-list'>
               <li><Link to="/" className='menu-list-item'>Home</Link></li>
               <li><Link to="/cart" className='menu-list-item'>Carrinho</Link></li>
               <li><Link to="/about" className='menu-list-item'>Sobre</Link></li>
           </ul>
        </nav>        
    )
}

export default Menu;