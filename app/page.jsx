'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useEffect, useRef, useState } from 'react';
import BootstrapClient from './BootstrapClient';

function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && count < end) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= end) {
            clearInterval(interval);
            return end;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval); // Evita múltiples intervalos
    }
  }, [isVisible, count, end]);

  return (
    <div className="col" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <BootstrapClient />

      <div className="background">
        <div className="first-section">
          <h1 className="primary-tittle">Somos la empresa Soluciones Tecnológicas Danyris</h1>
        </div>

        <div className="second-section">
          <a href="/about" className="text-decoration-none">
            <button className="btn btn-primary">
              <span className="font-button">
                Ver más <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <Counter end={80} label="Soluciones" />
          <Counter end={98} label="Proyectos" />
          <Counter end={90} label="Clientes satisfechos" />
        </div>
      </div>

      <div className="container text-center block">
        <h1 className="font-tittle2">LO QUE OFRECEMOS</h1>
        <div className="row g-2">
          {[
            { img: './img/services01.webp', title: 'Outsourcing TI', desc: 'Nos encargamos de brindar Outsourcing a todo nivel...' },
            { img: './img/services03.webp', title: 'Soporte Técnico', desc: 'Mantenimiento correctivo y preventivo...' },
            { img: './img/services02-1.webp', title: 'Licenciamiento de Software', desc: 'Tenemos las mejores soluciones de antivirus...' },
            { img: './img/services05.webp', title: 'Desarrollo de páginas web', desc: 'Desarrollamos tu Página web para presentar tus productos...' },
          ].map((s, i) => (
            <div className="col-6" key={i}>
              <div className="p-3">
                <img className="image-services" src={s.img} alt={s.title} />
                <span className="font-li3">{s.title}</span>
                <p className="font-des">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border"></div>
      <h1 className="tittle-marcas">Trabajamos con las mejores marcas</h1>
      <div class="container text-center">
        <div class="row row-cols-3">

          {/* <!-- Carousel 0 --> */}
          <div class="col">
          <div id="carousel0" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/logos/logo-adobe.png" className="d-block w-100" alt="Adobe" />
              </div>
              <div className="carousel-item">
                <img src="/img/logos/logo-Brother.png" className="d-block w-100" alt="Brother" />
              </div>
              <div className="carousel-item">
                <img src="/img/logos/logo-cisco.png" className="d-block w-100" alt="Cisco" />
              </div>
            </div>
          </div></div>


          {/* <!-- Carousel 1 --> */}
          <div class="col">
            <div id="carousel1" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./img/logos/logo-dell.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/Logo-Epson.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-cisco.png" class="d-block w-100" alt="..." />
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Carousel 2 --> */}
          <div class="col">
            <div id="carousel2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./img/logos/logo-adobe.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-hp.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-kaspersky.png" class="d-block w-100" alt="..." />
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Carousel 3 --> */}
          <div class="col">
            <div id="carousel3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./img/logos/Logo-Lenovo.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-microsoft.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-cisco.png" class="d-block w-100" alt="..." />
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Carousel 4 --> */}
          <div class="col">
            <div id="carousel4" class="carousel slide " data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner active">
                <div class="carousel-item active">
                  <img src="./img/logos/logo-tp-link.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-trendnet.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-cisco.png" class="d-block w-100" alt="..." />
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Carousel 5 --> */}
          <div class="col">
            <div id="carousel5" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner active">
                <div class="carousel-item active">
                  <img src="./img/logos/logo-ubiquiti.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-Brother.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-cisco.png" class="d-block w-100" alt="..." />
                </div>
              </div>

            </div>
          </div></div></div>

      <div className="container px-4 text-center contactenos-container1">
        <div className="row gx-5">
          <div className="col contactenos-container">
            <div className="p-3">
              <h1 className="tittle-contactenos">Destaca tu proyecto con nosotros</h1>
              <p className="par-contactenos">
                Contamos con más de 9 años en el mercado nacional, brindando seguridad y calidad con las mejores soluciones.
              </p>
              <h2 className="tittle-contactenos">Contáctanos rápido</h2>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input type="text" className="form-control" placeholder="Nombre de Contacto" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-building"></i></span>
                <input type="text" className="form-control" placeholder="Empresa" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                <input type="text" className="form-control" placeholder="Correo" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-phone-fill"></i></span>
                <input type="text" className="form-control" placeholder="Celular" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-chat-left-dots-fill"></i></span>
                <input type="text" className="form-control" placeholder="Mensaje" />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Elige un servicio" />
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Servicios
                </button>
                <ul className="dropdown-menu">
                  {['Cloud Computing', 'Networking y Cableado Estructurado', 'Equipamiento', 'Licenciamiento y Servicios', 'Help Desk'].map((service, idx) => (
                    <li key={idx}><a className="dropdown-item" href="#">{service}</a></li>
                  ))}
                </ul>
              </div>
              <button className="button-line">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
