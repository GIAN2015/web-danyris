'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import emailjs from 'emailjs-com';
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
   const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f8xf7xk', 'template_jviil2p', form.current, 'XyvI8lbXzQRrGzJWs')
            .then((result) => {
                console.log(result.text);
                alert("Mensaje enviado con éxito.");
            }, (error) => {
                console.log(error.text);
                alert("Hubo un error al enviar el mensaje.");
            });
    };

    const [servicio, setServicio] = useState("Elige un servicio");


    const handleServicioChange = (e) => {
        setServicio(e.target.innerText);
    };
  return (
    <>
      <BootstrapClient />

      <div className="background">
        <div className="overlay"></div> {/* <- Capa oscura */}
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

      <div className="container text-center my-5">
        <h1 className="section-title mb-4">LO QUE OFRECEMOS</h1>
        <div className="row g-4">
          {[
            {
              img: './img/services01.webp',
              title: 'Outsourcing TI',
              desc: 'Nos encargamos de brindar Outsourcing a todo nivel...',
            },
            {
              img: './img/services03.webp',
              title: 'Soporte Técnico',
              desc: 'Mantenimiento correctivo y preventivo...',
            },
            {
              img: './img/services02-1.webp',
              title: 'Licenciamiento de Software',
              desc: 'Tenemos las mejores soluciones de antivirus...',
            },
            {
              img: './img/services05.webp',
              title: 'Desarrollo de páginas web',
              desc: 'Desarrollamos tu Página web para presentar tus productos...',
            },
          ].map((s, i) => (
            <div className="col-12 col-md-6" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="card-img-top img-fluid rounded-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body9">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


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

      <div className="container px-4 text-center contactenos-container2">
        <div className="row gx-5">
          <div className="col contactenos-container">
            <div className="p-3">
              <h1 className="tittle-contactenos">Destaca tu proyecto con nosotros</h1>
              <form ref={form} onSubmit={sendEmail} className="form-contactenos">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input type="text" className="form-control" name="nombre" placeholder="Nombre de Contacto" required />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-building"></i>
                  </span>
                  <input type="text" className="form-control" name="empresa" placeholder="Empresa" required />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input type="email" className="form-control" name="correo" placeholder="Correo" required />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-phone-fill"></i>
                  </span>
                  <input type="text" className="form-control" name="celular" placeholder="Celular" required />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-chat-left-dots-fill"></i>
                  </span>
                  <input type="text" className="form-control" name="mensaje" placeholder="Mensaje" required />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Elige un servicio"
                    name="servicio"
                    value={servicio}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Servicios
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><button type="button" className="dropdown-item" onClick={handleServicioChange}>Cloud Computing</button></li>
                    <li><button type="button" className="dropdown-item" onClick={handleServicioChange}>Networking y Cableado Estructurado</button></li>
                    <li><button type="button" className="dropdown-item" onClick={handleServicioChange}>Equipamiento</button></li>
                    <li><button type="button" className="dropdown-item" onClick={handleServicioChange}>Licenciamiento y Servicios</button></li>
                    <li><button type="button" className="dropdown-item" onClick={handleServicioChange}>Help Desk</button></li>
                  </ul>

                </div>

                <button type="submit" className="button-line">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
