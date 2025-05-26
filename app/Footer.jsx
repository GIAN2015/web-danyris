export default function Footer() {
    return (
        <footer class="footer bg-footer text-white py-5">
            <div class="container">
                <div class="row">


                    <div class="col-md-3 mb-4 border-end border-white">
                        <img src="/img/Logo_DANYRIS-Blanco-Horizontal.png" alt="Danyris_SAC" class="mb-3" style={{ maxWidth: "290px" }} />
                        <p className="font-tittle ">
                            En DANYRIS entendemos lo importante que es la entrega de un buen servicio hacia nuestros clientes, somos apasionados por la calidad y excelencia del servicio, estamos totalmente comprometidos con nuestros clientes.
                        </p>
                        <img src="/img/CCL.png" alt="CCL" style={{ maxWidth: "150px" }} />
                        <div className="d-flex gap-2 mt-3">
                            <img src="/img/osce.webp" alt="OSCE" style={{ maxWidth: "150px" }} />
                        </div>
                    </div>


                    <div class="col-md-3 mb-4">
                        <h5 class="mb-3 font-tittle">ACERCA DE DANYRIS SAC</h5>
                        <ul class="list-unstyled">
                            <li className="punto"><a className="font-li2">Políticas ISO</a></li>
                            <li className="punto"><a className="font-li2">Política antisoborno</a></li>
                        </ul>
                        <h6 class="mt-4 font-tittle" >Libro de reclamaciones</h6><a href="/libro-reclamaciones" className="text-decoration-none">
                            <img src="/img/libro_reclamaciones.png" alt="Libro" style={{ maxWidth: "150px" }} /></a>
                        <h6 className="mt-4 font-tittle" >SÍGUENOS EN:</h6>
                        <div class="d-flex gap-3">
                            <a href="https://www.facebook.com/stdanyris" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
                            <a href="https://www.instagram.com/stdanyris/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                            <a href="https://www.linkedin.com/company/soluciones-tecnologicas-danyris/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <h5 class="mb-3 font-tittle">Menu</h5>
                        <ul class="list-unstyled">

                            <li className="punto"><a className="font-li" href="/">Inicio</a></li>
                            <li className="punto"> <a className="font-li" href="/"> Nosotros</a></li>
                            <li className="punto"><a className="font-li" href="/">Servicios</a></li>
                            <li className="punto"><a className="font-li" href="/">Contáctenos</a></li>
                            <li className="punto"><a className="font-li" href="/">Novedades</a></li>
                        </ul>
                    </div>



                    <div class="col-md-3 mb-4">
                        <h5 class="mb-3 font-tittle">SOLUCIONES</h5>
                        <ul class="list-unstyled">

                            <li className="punto"><a className="font-li2">Data Center</a></li>
                            <li className="punto"><a className="font-li2">Cloud</a></li>
                            <li className="punto"><a className="font-li2">Networking y Cableado Estructurado</a></li>
                            <li className="punto"><a className="font-li2">Equipamiento</a></li>
                            <li className="punto"><a className="font-li2">Licenciamiento y Servicios</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>

    )
}