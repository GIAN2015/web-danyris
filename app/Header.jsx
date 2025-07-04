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
        <div className="absolute left-0 lg:static">
          <a className="navbar-brand mx-auto lg:mx-0 flex justify-center" href="/">
            <img src="/img/Logo_DANYRIS-Color-Horizontal-1024x212-1.png" alt="Logo Danyris" height="60" />
          </a>
        </div>


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

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} w-full bg-[#0d114f] mt-2 lg:mt-0`} id="navbarSupportedContent">
          <ul className="navbar-nav w-full flex flex-col gap-2 text-white text-start px-4 py-2 lg:flex-row lg:items-center lg:justify-end lg:gap-4">
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/' ? 'active-link' : ''}`} href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/nosotros' ? 'active-link' : ''}`} href="/nosotros">Nosotros</a>
            </li>
            <li ref={dropdownRef} className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}>
              <a
                className={`nav-link dropdown-toggle font-custom custom ${pathname.startsWith('/servicios') ? 'active-link' : ''}`}
                href="/servicios"
                role="button"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                Nuestras Soluciones
              </a>
              <ul className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                <li><a className="dropdown-item" href="/servicios?section=equipamiento">Equipamiento</a></li>
                <li><a className="dropdown-item" href="/servicios?section=cloud">Cloud Computing</a></li>
                <li><a className="dropdown-item" href="/servicios?section=networking">Networking</a></li>
                <li><a className="dropdown-item" href="/servicios?section=licencias">Licenciamiento</a></li>
                <li><a className="dropdown-item" href="/servicios?section=web">Desarrollo Web</a></li>
                <li><a className="dropdown-item" href="/servicios?section=helpdesk">Help Desk</a></li>
                <li><a className="dropdown-item" href="/servicios?section=consultoria">Consultoría</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/contactenos' ? 'active-link' : ''}`} href="/contactenos">Contáctenos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link font-custom ${pathname === '/novedades' ? 'active-link' : ''}`} href="/novedades">Novedades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
