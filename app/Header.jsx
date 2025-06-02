'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {useRef, useEffect} from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); 
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar navbar-expand-lg bg-custom-blue ">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">   <img className='margin' src="/img/Logo_DANYRIS-Color-Horizontal-1024x212-1.png" alt="Logo Danyris" height="60" /></a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarSupportedContent ">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/' ? 'active-link' : ''}`} href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/about' ? 'active-link' : ''}`} href="/about">Nosotros</a>
            </li>

            {/* Dropdown */}
            <li ref= {dropdownRef} className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}>
              <a
                className="nav-link dropdown-toggle font-custom custom "
                href="/servicios"
                role="button"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
               Servicios
                
              </a>
              <ul className={`dropdown-menu 'underline' ${dropdownOpen ? ' show' : ''}`}>
                <li>
                  <a className={`dropdown-item text-decoration ${pathname === '/networking' ? 'active-link'  : ''}`} href="/networking">Networking y cableado estructurado</a>
                </li>
                <li>
                  <a className={`dropdown-item text-decoration ${pathname === '/web' ? 'active-link' : ''}`} href="/web">Desarrollo páginas web</a>
                </li>
                <li>
                  <a className={`dropdown-item  text-decoration ${pathname === '/licencias' ? 'active-link' : ''}`} href="/licencias">Licenciamientos y servicios</a>
                </li>
                <li>
                  <a className={`dropdown-item  text-decoration ${pathname === '/cloud' ? 'active-link' : ''}`} href="/cloud">Cloud</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/contact' ? 'active-link' : ''}`} href="/contact">Contáctenos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/news' ? 'active-link' : ''}`} href="/news">Novedades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
