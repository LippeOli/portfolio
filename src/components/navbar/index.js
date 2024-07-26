import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <nav className='home-panel'>
      <div className='navbar-container'>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <a href='#home' className='navbar-link'>Home</a>
          </li>
          <li className='navbar-item'>
            <a href='#about' className='navbar-link'>About</a>
          </li>
          <li className='navbar-item'>
            <a href='#skills' className='navbar-link'>Skills</a>
          </li>
          <li className='navbar-item'>
            <a href='#projects' className='navbar-link'>Projects</a>
          </li>
          <li className='navbar-item'>
            <a href='#contact' className='navbar-link'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
