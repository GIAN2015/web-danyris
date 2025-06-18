'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
export const dynamic = 'force-dynamic';
import dynamicImport from 'next/dynamic';

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import BootstrapClient from './BootstrapClient';






function Counter({ end, label }) {

  const [count, setCount] = useState(0);
  const ref = useRef();
  // const recaptchaRef = useRef(); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Protección SSR

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
      return () => clearInterval(interval);
    }
  }, [isVisible, count, end]);

  return (
    <div className="col" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

const ReCAPTCHA = dynamicImport(() => import('react-google-recaptcha'), { ssr: false });
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
export default function Home() {


  const form = useRef(null);


  const [captchaToken, setCaptchaToken] = useState(null);
  const [servicio, setServicio] = useState("Elige un servicio");
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
  const recaptchaRef = useRef(null);


  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Por favor completa el reCAPTCHA.");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_f8xf7xk",
        "template_jviil2p",
        form.current,
        "XyvI8lbXzQRrGzJWs"
      );

      console.log("Éxito:", result.text);
      setEnviado(true);
      setMensaje("✅ Mensaje enviado con éxito.");
      setError('');
      setCaptchaToken(null);
      form.current.reset();

      // Resetea el reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }

    } catch (error) {
      console.error("Error en envío:", error);
      setError("Error al enviar. Intenta nuevamente.");
      setEnviado(false);
      setMensaje("❌ Error al enviar. Intenta nuevamente.");
    }
  };
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      // Todos los carousels en la página serán activados automáticamente
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        new window.bootstrap.Carousel(carousel, {
          interval: 2000,
          ride: 'carousel',
        });
      });
    });
  }, []);


  const handleServicioChange = (e) => {
    setServicio(e.target.innerText);
  };
  if (!siteKey) return <p>Error: Falta la clave del reCAPTCHA</p>;
  return (

    <>
      <BootstrapClient />


      <div className="background">
        <div className="overlay"></div> {/* <- Capa oscura */}
        <div className="first-section">
          <h1 className="primary-tittle">Somos la empresa Soluciones Tecnológicas Danyris</h1>
        </div>

        <div className="second-section">
          <a href="/nosotros" className="text-decoration-none">
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

      <div className="container text-center my-5 px-3">
        <h1 className="section-title mb-4 text-2xl md:text-3xl font-bold">LO QUE OFRECEMOS</h1>

        <div className="row g-4">
          {[
            {
              img: './img/services01.webp',
              title: 'Outsourcing TI',
              desc: 'Nos encargamos de brindar Outsourcing a todo nivel...',
            },
            {
              img: './img/services02-1.webp',
              title: 'Soporte Técnico',
              desc: 'Mantenimiento correctivo y preventivo...',
            },
            {
              img: './img/services03.webp',
              title: 'Licenciamiento de Software',
              desc: 'Tenemos las mejores soluciones de antivirus...',
            },
            {
              img: './img/services05.webp',
              title: 'Desarrollo de páginas web',
              desc: 'Desarrollamos tu Página web para presentar tus productos...',
            },
          ].map((s, i) => (
            <div key={i} className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0 sm:rounded-xl sm:overflow-hidden sm:shadow-md hover:sm:shadow-lg transition sm:duration-300">
                <img
                  src={s.img}
                  alt={s.title}
                  className="card-img-top img-fluid sm:w-full sm:h-48 sm:object-cover"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body9 p-4 text-start">
                  <h5 className="card-title text-base sm:text-lg font-semibold">{s.title}</h5>
                  <p className="card-text text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





      <h1 className="tittle-marcas">Trabajamos con las mejores marcas</h1>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div className="col" key={index}>
              <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                  {/* Aquí debes poner las imágenes de cada carrusel manualmente según el ID */}
                  {index === 0 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/logo-adobe.png" className="d-block w-100 img-fluid" alt="Adobe" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-Brother.png" className="d-block w-100 img-fluid" alt="Brother" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/Logo-Epson.png" className="d-block w-100 img-fluid" alt="Cisco" />
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/logo-dell.png" className="d-block w-100 img-fluid" alt="Dell" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-cisco.png" className="d-block w-100 img-fluid" alt="Epson" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-hp.png" className="d-block w-100 img-fluid" alt="Cisco" />
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/logo-adobe.png" className="d-block w-100 img-fluid" alt="Adobe" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-hp.png" className="d-block w-100 img-fluid" alt="HP" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-kaspersky.png" className="d-block w-100 img-fluid" alt="Kaspersky" />
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/Logo-Lenovo.png" className="d-block w-100 img-fluid" alt="Lenovo" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-microsoft.png" className="d-block w-100 img-fluid" alt="Microsoft" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-tp-link.png" className="d-block w-100 img-fluid" alt="Cisco" />
                      </div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/logo-tp-link.png" className="d-block w-100 img-fluid" alt="TP-Link" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-trendnet.png" className="d-block w-100 img-fluid" alt="Trendnet" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-cisco.png" className="d-block w-100 img-fluid" alt="Cisco" />
                      </div>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <div className="carousel-item active">
                        <img src="./img/logos/logo-ubiquiti.png" className="d-block w-100 img-fluid" alt="Ubiquiti" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-Brother.png" className="d-block w-100 img-fluid" alt="Brother" />
                      </div>
                      <div className="carousel-item">
                        <img src="./img/logos/logo-kaspersky.png" className="d-block w-100 img-fluid" alt="Cisco" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>







      <div className="container px-4 text-center contactenos-container2">
        <div className="row gx-5">
          <div className="col contactenos-container">
            <div className="p-3">
              <h1 className="tittle-contactenos">Destaca tu proyecto con nosotros</h1>
              <form ref={form} onSubmit={sendEmail} className="form-contactenos">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Nombre de Contacto"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-building"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="empresa"
                    placeholder="Empresa"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="correo"
                    placeholder="Correo"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-phone-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="celular"
                    placeholder="Celular"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-chat-left-dots-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="mensaje"
                    placeholder="Mensaje"
                    required
                  />
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
                    <li>
                      <button type="button" className="dropdown-item" onClick={handleServicioChange}>
                        Cloud Computing
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" onClick={handleServicioChange}>
                        Networking y Cableado Estructurado
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" onClick={handleServicioChange}>
                        Equipamiento
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" onClick={handleServicioChange}>
                        Licenciamiento y Servicios
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" onClick={handleServicioChange}>
                        Otro
                      </button>
                    </li>

                  </ul>
                </div>

                {/* CAPTCHA en español */}
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                    hl="es" // para mostrarlo en español
                  />
                </div>

                <button type="submit" className="button-line">Enviar</button>
                {mensaje && (
                  <p style={{ marginTop: '10px', color: mensaje.includes('✅') ? 'green' : 'red' }}>
                    {mensaje}
                  </p>
                )}


              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
