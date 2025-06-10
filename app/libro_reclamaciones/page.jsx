'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Script from "next/script";



export default function LibroReclamaciones() {

    const form = useRef();
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(null);
    const [captchaReady, setCaptchaReady] = useState(false);
    useEffect(() => {
        const checkCaptcha = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    setCaptchaReady(true);
                });
            } else {
                setTimeout(checkCaptcha, 500);
            }
        };
        checkCaptcha();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario...");

        const recaptcha = window.grecaptcha.getResponse();
        console.log("Token reCAPTCHA:", recaptcha);
        if (!recaptcha) {
            setError("Por favor, verifica el reCAPTCHA.");
            return;
        }

        console.log("Campos enviados:", new FormData(form.current));

        emailjs
            .sendForm("service_h5b2jtg", "template_jviil2p", form.current, "XyvI8lbXzQRrGzJWs")
            .then(
                (result) => {
                    console.log("Éxito:", result.text);
                    setEnviado(true);
                    form.current.reset();
                    window.grecaptcha.reset();
                },
                (error) => {
                    console.error("Error en envío:", error);
                    setError("Error al enviar. Intenta nuevamente.");
                }
            );
    };


    return (

        <>
            <div className="background-services py-5 text-white text-center">
                <div className="overlay"></div> {/* <- Capa oscura */}
                <div className="first-section">
                    <h1 className="primary-services">Libro de reclamaciones</h1>
                    <div className="container"></div>
                </div>
            </div>
            {/* Script de Google reCAPTCHA v2 */}
            <Script
                src="https://www.google.com/recaptcha/api.js"
                strategy="beforeInteractive"
            />

            <form ref={form} onSubmit={handleSubmit} className="form-reclamo">
                <h4>Ingrese sus datos</h4>

                <div className="form-row">
                    <input type="text" name="nombres" placeholder="Name" required />
                    <input type="text" name="apellidos" placeholder="Apellidos" required />
                </div>

                <input type="email" name="email" placeholder="Email" required />

                <div className="form-row">
                    <select name="tipo_documento" required>
                        <option value="">[Seleccione]</option>
                        <option value="DNI">DNI</option>
                        <option value="CE">CE</option>
                    </select>
                    <input type="text" name="numero_documento" placeholder="Número de documento" required />
                </div>

                <div className="form-row">
                    <input type="email" name="correo_electronico" placeholder="Correo electrónico" required />
                    <input type="tel" name="telefono" placeholder="Teléfono" required />
                </div>

                <input type="text" name="direccion" placeholder="Dirección" required />
                <input type="text" name="padre_madre" placeholder="Nombre del Padre o Madre (En caso sea menor de edad)" />

                <h4>Ingrese los detalles de la reclamación y pedido</h4>

                <div className="form-row">
                    <select name="tipo_bien" required>
                        <option value="">[Seleccione]</option>
                        <option value="producto">Producto</option>
                        <option value="servicio">Servicio</option>
                    </select>
                    <input type="text" name="valor_bien" placeholder="Valor del bien" required />
                </div>

                <textarea name="comprobante" placeholder="Pedido o Número de comprobante" rows="3"></textarea>
                <textarea name="detalle" placeholder="Detalle" rows="3"></textarea>
                <textarea name="accion" placeholder="Ingrese la acción tomada por nuestro representante" rows="3"></textarea>

                <p>(1) = Disconformidad relacionada a los productos o servicios.</p>
                <p>(2) = Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</p>

                <div className="form-row">
                    <label><input type="radio" name="tipo" value="1" required /> Reclamo(1)</label>
                    <label><input type="radio" name="tipo" value="2" /> Queja(2)</label>
                </div>

                {/* CAPTCHA */}
                <div className="g-recaptcha" data-sitekey="6LelwFYrAAAAAEksbrcWyslGk9N9GjajQXzgRyxR"></div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {enviado && <p style={{ color: "green" }}>Formulario enviado correctamente.</p>}

                <button type="submit" disabled={!captchaReady}>Enviar</button>
            </form>
        </>

    )
}