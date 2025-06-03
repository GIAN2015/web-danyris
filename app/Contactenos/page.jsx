'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BootstrapClient from './BootstrapClient';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Contactenos() {
    return (
        <>
            <div className="contactenos-background">
                <div className="about-section">
                    <h1 className="about-tittle">Contactenos</h1>
                </div>

                <div className="about-section">

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
    )
}