export default function About() {
    return (
        <>
            <section className="about-background py-5 text-white text-center">
                <div className="overlay"></div> {/* <- Capa oscura */}
                <div className="first-section">
                    <h1 className="primary-services">Sobre Nosotros</h1>
                     <div className="container"></div>
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
                    <div className="row text-center">
                        <div className="col-md-6 mb-4">
                            <h3 className="mb-3">Nuestra Misión</h3>
                            <p>
                                Obtener clientes satisfechos gracias a nuestro compromiso y dedicación. Garantizar la calidad y excelencia de nuestros servicios y productos.
                            </p>
                           <a href="/servicios"> <button className="btn btn-primary">Ver Servicios</button></a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h3 className="mb-3">Nuestra Visión</h3>
                            <p>
                                Consolidarnos como la mejor alternativa de soluciones tecnológicas en el mercado nacional, con los más altos certificados en informática.
                            </p>
                               <a href="/servicios"> <button className="btn btn-primary">Ver Servicios</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
