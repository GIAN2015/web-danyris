'use client'

import dynamicImport from 'next/dynamic';
export const dynamic = 'force-dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ReCAPTCHA = dynamicImport(() => import('react-google-recaptcha'), { ssr: false });


const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';




export default function Contactenos() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const form = useRef();

    const [captchaToken, setCaptchaToken] = useState(null);
    const [servicio, setServicio] = useState("Elige un servicio");
    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Por favor completa el reCAPTCHA.");
            return;
        }

        emailjs
            .sendForm(
                "service_f8xf7xk",
                "template_jviil2p",
                form.current,
                "XyvI8lbXzQRrGzJWs"
            )
            .then(
                (result) => {
                    alert("Mensaje enviado correctamente.");
                    console.log("Correo enviado", result.text);
                    form.current.reset();
                    setServicio("");
                    setCaptchaToken(null);
                },
                (error) => {
                    alert("Error al enviar el mensaje.");
                    console.error("Error al enviar correo", error.text);
                }
            );
    };




    const handleServicioChange = (e) => {
        setServicio(e.target.innerText);
    };
    if (!siteKey) return <p>Error: Falta la clave del reCAPTCHA</p>;

    return (
        <>
            <div className="contactenos-background py-5 text-white text-center">
                <div className="overlay"></div> {/* <- Capa oscura */}
                <div className="first-section">
                    <h1 className="primary-services">Contáctenos</h1>
                    <div className="container"></div>
                </div>
            </div>

            <div class="container px-4 text-center contactenos-container1">
                <div class="row gx-5">
                    <div class="col contactenos-container ">
                        <div class="p-3"><h1 className='tittle-contactenos'>Destaca tu proyecto con nosotros</h1></div>
                        <p className='par-contactenos'>Contamos con más de 9 años en el mercado nacional, brindando seguridad y calidad con las mejores soluciones.</p>
                        <div>
                            <h2 className="tittle-contactenos">Contáctanos rápido</h2>
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
                                                Help Desk
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
                                        hl="es"
                                        ref={recaptchaRef}
                                    />
                                </div>

                                <button type="submit" className="button-line">Enviar</button>
                            </form>


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
                                <a href="https://www.linkedin.com/company/soluciones-tecnologicas-danyris/"><i class="bi bi-linkedin"></i></a>
                                <a href="https://www.facebook.com/stdanyris"><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/stdanyris/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}