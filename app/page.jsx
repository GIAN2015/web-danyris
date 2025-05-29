'use client';
import BootstrapClient from './BootstrapClient';


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
          <div class="col">
            <div id="carousel0" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./img/logos/logo-adobe.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-Brother.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./img/logos/logo-cisco.png" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel0" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel0" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* <!-- Carousel 4 --> */}
          <div class="col">
            <div id="carousel4" class="carousel slide active" data-bs-ride="carousel" data-bs-interval="2000">
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
