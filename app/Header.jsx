'use client';

import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Application</a>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Nosotros</a>
            </li>
            

            {/* Dropdown */}
            <li className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
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
                <li>
                  <a className="dropdown-item" href="/networking">Networking y cableado estructurado</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/web">Desarrollo páginas web</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/licencias">Licenciamientos y servicios</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/cloud">Cloud</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contáctenos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">Novedades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
