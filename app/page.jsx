// BootstrapClient.js
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './BootstrapClient';
import 'bootstrap/dist/js/bootstrap.bundle.min';


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
          <div className="col">
            <h1 className="tittle-numbers">+80</h1>
            <span className="font-numbers">soluciones</span>
          </div>
          <div className="col">
            <h1 className="tittle-numbers">98</h1>
            <span className="font-numbers">proyectos</span>
          </div>
          <div className="col">
            <h1 className="tittle-numbers">+90</h1>
            <span className="font-numbers">Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="border"></div>

      <div className="container text-center block">
        <h1 className="font-tittle2">LO QUE OFRECEMOS</h1>
        <div className="row g-2">
          <div className="col-6">
            <div className="p-3">
              <img className="image-services" src="./img/services01.webp" />
              <span className="font-li3">Outsourcing TI</span>
              <p className="font-des">Nos encargamos de brindar Outsourcing a todo nivel...</p>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3">
              <img className="image-services" src="./img/services03.webp" />
              <span className="font-li3">Soporte Técnico</span>
              <p className="font-des">Mantenimiento correctivo y preventivo...</p>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3">
              <img className="image-services" src="./img/services02-1.webp" />
              <span className="font-li3">Licenciamiento de Software</span>
              <p className="font-des">Tenemos las mejores soluciones de antivirus...</p>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3">
              <img className="image-services" src="./img/services05.webp" />
              <span className="font-li3">Desarrollo de páginas web</span>
              <p className="font-des">Desarrollamos tu Página web para presentar tus productos...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <h1 className='tittle-marcas'>Trabajamos con las mejores marcas</h1>


      <div class="container text-center">
        <div class="row row-cols-3">
          {/* <!-- Carousel 0 --> */}
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
          </div>


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
          </div>
        </div>
      </div>
      

      <div class="container px-4 text-center contactenos-container1">
        <div class="row gx-5">
          <div class="col contactenos-container ">
            <div class="p-3"><h1 className='tittle-contactenos'>Destaca tu proyecto con nosotros</h1></div>
            <p className='par-contactenos'>Contamos con más de 9 años en el mercado nacional, brindando seguridad y calidad con las mejores soluciones.</p>
            <div>
              <h2 className='tittle-contactenos'>Contáctanos rápido</h2>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"> <i className="bi bi-person-fill"></i></span>
                <input type="text" class="form-control" placeholder="Nombre de Contacto" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i className="bi bi-building"></i></span>
                <input type="text" class="form-control" placeholder="Empresa" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">   <i className="bi bi-envelope-fill"></i></span>
                <input type="text" class="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">  <i className="bi bi-phone-fill"></i></span>
                <input type="text" class="form-control" placeholder="celular" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1"> <i className="bi bi-chat-left-dots-fill"></i></span>
                <input type="text" class="form-control" placeholder="mensaje" aria-label="Username" aria-describedby="basic-addon1"></input>

                <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Elige un servicio" />
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" id='Cloud Computing '>Cloud Computing </a></li>
                  <li><a class="dropdown-item" id='Cloud Computing '>Networking y Cableado Estructurado </a></li>
                  <li><a class="dropdown-item" id='Cloud Computing '>Equipamiento </a></li>
                  <li><a class="dropdown-item" id='Cloud Computing ' >Licenciamiento y Servicios </a></li>
                  <li><a class="dropdown-item" id='Cloud Computing ' >Help Desk  </a></li>
                </ul>

              </div>
              <button className='button-line'>Enviar</button>

            </div>
          </div>
          <div class="col">
            <div class="contact-info">
              <h5>UBÍQUENOS</h5>

              <div class="info-item">
                <i class="bi bi-telephone-fill"></i>
                <div>
                  <span class="label">Teléfonos</span><br />
                  <strong>(+51)1 480-0525 / +51 924 057 419</strong>
                </div>
              </div>

              <div class="info-item">
                <i class="bi bi-whatsapp"></i>
                <div>
                  <span class="label">WhatsApp</span><br />
                  <strong>924 057 419</strong>
                </div>
              </div>

              <div class="info-item">
                <i class="bi bi-envelope-fill"></i>
                <div>
                  <span class="label">Email</span><br />
                  <strong>informes@danyris.com</strong>
                </div>
              </div>

              <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <div>
                  <strong>Calle Victor Jara, Mz. R, Lt. 6, UPIS San José, Urb, Lurín 15822</strong>
                </div>
              </div>

              <h5>SÍGUENOS</h5>
              <div class="social-icons">
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}
