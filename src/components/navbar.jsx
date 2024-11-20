import React, { useEffect, useRef, useState } from 'react';
import '../style/navbar.css';
import { NavLink } from 'react-router-dom';
import menu from '../image/menu.png';

const nav_link = [
  { path: '/', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/project', display: 'Projects' },
  { path: '/contact', display: 'Contact' },
];

function Navbar() {
  const headerref = useRef(null);

  const stickyheaderfunction = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerref.current.classList.add('sticky__header');
        document.getElementById('nav-menu-ul').style.display='none';
      } else {
        headerref.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyheaderfunction();
    return () => window.removeEventListener('scroll', stickyheaderfunction);
  }, []);

  const menuopen = () => {
    const navMenu = document.getElementById('nav-menu-ul');
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none'; 
      headerref.current.style.marginBottom = '0px';
    } else {
      navMenu.style.display = 'block'; 
      headerref.current.style.marginBottom = '150px';
    }
  }

const menubarNone = () => {
  headerref.current.style.marginBottom = '0px';
  document.getElementById('nav-menu-ul').style.display='none';
}


  return (
    <div className="container" ref={headerref}>
      <div className="nav-container">
        <div id="nav-div1">
          <NavLink to={'/'}>
            <h2>
              <span id="letter1">S</span>ubhro <span id="letter2">M</span>ajumder
            </h2>
          </NavLink>
          <div id='menu-div'>
            <img
              src={menu}
              id="menubar"
              alt="Menu"
              onClick={menuopen}
            />
            <ul id="nav-menu-ul">
              {nav_link.map((item, index) => (
                <li key={index} id="nav-ul" onClick={menubarNone}>
                  <NavLink to={item.path}>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="nav-div2">
          <ul id="nav-div2-ul">
            {nav_link.map((item, index) => (
              <li key={index} id="nav-ul">
                <NavLink to={item.path}>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;