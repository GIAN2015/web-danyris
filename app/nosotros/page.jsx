export default function About() {
    return (
        <>
            <section className="about-background py-5 text-white text-center position-relative">
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div> {/* Capa oscura */}
                <div className="first-section">
                    <h1 className="primary-services ">Sobre Nosotros</h1>
                    <div className="container">
                        {/* Puedes agregar contenido adicional aquí */}
                    </div>
                </div>
            </section>


            <section className="about-info py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="mb-3">Nosotros</h2>
                            <p>
                                En DANYRIS entendemos lo importante que es la entrega de un buen servicio hacia nuestros clientes.
                                Somos apasionados por la calidad y excelencia del servicio, y estamos totalmente comprometidos con nuestros clientes.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid rounded shadow" src="./img/about/Outsourcing-TI-3.jpg.png" alt="Equipo de trabajo" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision-section py-5 bg-light">
                <div className="container">
                    <div className="row gy-5">

                        {/* Misión */}
                        <div className="col-12 col-md-6 d-flex flex-column text-center text-md-start">
                            <h3 className="mb-3">Nuestra Misión</h3>
                            <p className="mb-4">
                                Obtener clientes satisfechos gracias a nuestro compromiso y dedicación. Garantizar la calidad y excelencia de nuestros servicios y productos.
                            </p>
                            <div className="mt-auto">
                                <a href="/servicios">
                                    <button className="btn btn-primary w-100 w-md-auto">Ver Servicios</button>
                                </a>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="col-12 col-md-6 d-flex flex-column text-center text-md-start">
                            <h3 className="mb-3">Nuestra Visión</h3>
                            <p className="mb-4">
                                Consolidarnos como la mejor alternativa de soluciones tecnológicas en el mercado nacional, con los más altos certificados en informática.
                            </p>
                            <div className="mt-auto">
                                <a href="/servicios">
                                    <button className="btn btn-primary w-100 w-md-auto">Ver Servicios</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
}
