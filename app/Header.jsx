'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar header navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className='margin' src="/img/Logo_DANYRIS-Color-Horizontal-1024x212-1.png" alt="Logo Danyris" height="60" />
        </a>

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

        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/' ? 'active-link' : ''}`} href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/about' ? 'active-link' : ''}`} href="/nosotros">Nosotros</a>
            </li>
            <li ref={dropdownRef} className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}>
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
              <ul className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                <li><a className={`dropdown-item ${pathname === '/networking' ? 'active-link' : ''}`} href="/servicios">Networking</a></li>
                <li><a className={`dropdown-item ${pathname === '/web' ? 'active-link' : ''}`} href="/servicios">Desarrollo Web</a></li>
                <li><a className={`dropdown-item ${pathname === '/licencias' ? 'active-link' : ''}`} href="/servicios">Licenciamiento</a></li>
                <li><a className={`dropdown-item ${pathname === '/cloud' ? 'active-link' : ''}`} href="/servicios">Cloud</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/Contactenos' ? 'active-link' : ''}`} href="/contactenos">Contáctenos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/news' ? 'active-link' : ''}`} href="/novedades">Novedades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
