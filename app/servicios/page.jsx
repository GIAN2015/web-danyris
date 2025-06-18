'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Servicios() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

    const section = searchParams.get('section');
    if (section) {
      const sectionMap = {
        cloud: 'collapse1',
        networking: 'collapse2',
        equipamiento: 'collapse3',
        licencias: 'collapse4',
        helpdesk: 'collapse5',
        web: 'collapse6',
        consultoria: 'collapse7',
      };

      const collapseId = sectionMap[section];
      if (collapseId) {
        const collapseElement = document.getElementById(collapseId);
        if (collapseElement) {
          const collapse = new bootstrap.Collapse(collapseElement, {
            toggle: true,
          });
          collapse.show();
        }
      }
    }
  }, [searchParams]);
    return (
        <>
            <div className="background-services py-5 text-white text-center">
                <div className="overlay"></div> {/* <- Capa oscura */}
                <div className="first-section">
                    <h1 className="primary-services">Servicios</h1>
                    <div className="container"></div>
                </div>
            </div>

            <div className="container">
                <h2 className="text-des">Nosotros resolvemos problemas reales</h2>
            </div>

            <div className="container-servicios" id="accordionServicios">
                {/* Servicio 1 */}
                <div className="card">
                    <div className="card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
                        <h5 className="card-title">Cloud Computing </h5>
                        <p className="card-text">Ofrecemos soluciones en la nube escalables y seguras para empresas.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse1" data-bs-parent="#accordionServicios">
                            <div className="card card-body">
                                <ul>
                                    <li className="list-item-servicio">SaaS</li>
                                    <li className="list-item-servicio">PaaS</li>
                                    <li className="list-item-servicio">IaaS</li>
                                    <li className="list-item-servicio">Azure</li>
                                    <li className="list-item-servicio">AWS</li>
                                    <li className="list-item-servicio">Procesamiento y/o Almacenamiento</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Servicio 2 */}
                <div className="card">
                    <div className="card-body1 card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                        <h5 className="card-title">Networking y Cableado Estructurado</h5>
                        <p className="card-text">Diseñamos e instalamos redes eficientes y organizadas.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse2" data-bs-parent="#accordionServicios">
                            <div className="card card-body1 card-body">
                                <li className="list-item-servicio">Switches</li>
                                <li className="list-item-servicio">Diseño e implementación de redes</li>
                                <li className="list-item-servicio">Diseño de Redes Inalámbricas</li>
                                <li className="list-item-servicio">Seguridad Perimetral</li>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Servicio 4 */}
                <div className="card">
                    <div className="card-body3 card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false">
                        <h5 className="card-title">Licenciamiento y Servicios</h5>
                        <p className="card-text">Distribuimos software original y brindamos soporte técnico.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse4" data-bs-parent="#accordionServicios">
                            <div className="card card-body3 card-body">
                                <ul>
                                    <li className="list-item-servicio">Microsoft 365 Business</li>
                                    <li className="list-item-servicio">Windows y Windows Server</li>
                                    <li className="list-item-servicio">CSP, ESD y OEM</li>
                                    <li className="list-item-servicio">Creative Cloud</li>
                                    <li className="list-item-servicio">Garantías Extendidas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Servicio 3 */}
                <div className="card">
                    <div className="card-body2 card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                        <h5 className="card-title">Equipamiento</h5>
                        <p className="card-text">Suministro de equipos tecnológicos de calidad.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse3" data-bs-parent="#accordionServicios">
                            <div className="card card-body2 card-body">
                                <li className="list-item-servicio">PCs</li>
                                <li className="list-item-servicio">Workstation</li>
                                <li className="list-item-servicio">Impresoras y Escáneres</li>
                                <li className="list-item-servicio">Proyectores</li>
                                <li className="list-item-servicio">Pizarras Interactivas</li>
                                <li className="list-item-servicio">Suministros</li>
                                <li className="list-item-servicio">Puntos de Venta</li>
                                <li className="list-item-servicio">Otros periféricos</li>
                            </div>
                        </div>
                    </div>
                </div>

                

                {/* Servicio 5 */}
                <div className="card">
                    <div className="card-body4 card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false">
                        <h5 className="card-title">Help Desk</h5>
                        <p className="card-text">Atención rápida y eficiente a incidentes tecnológicos.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse5" data-bs-parent="#accordionServicios">
                            <div className="card card-body4 card-body">
                                <ul>
                                    <li className="list-item-servicio">Soporte remoto o presencial para resolver problemas técnicos del día a día.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Servicio 6 */}
                <div className="card">
                    <div className="card-body5 card-body" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false">
                        <h5 className="card-title">Diseño y desarrollo de sitios web y apps</h5>
                        <p className="card-text">Creamos plataformas digitales personalizadas y funcionales.</p>
                        <div className='flecha'>
                            <i className="bi bi-caret-down-fill"></i></div>
                        <div className="collapse" id="collapse6" data-bs-parent="#accordionServicios">
                            <div className="card card-body5 card-body">
                                <ul>
                                    <li className="list-item-servicio"> Sitios web responsivos, tiendas virtuales, apps móviles para iOS/Android.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Servicio 7 */}
                <div className="card">
                    <div className="card-body6" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false">
                        <h5 className="card-title">Consultoría de software y SAP B1 for Hana</h5>
                        <p className="card-text">Asesoría especializada en implementación y soporte de software empresarial.</p>
                        <i className="bi bi-caret-down-fill"></i>
                        <div className="collapse" id="collapse7" data-bs-parent="#accordionServicios">
                            <div className="card card-body6">
                                <ul>
                                    <li className="list-item-servicio"> Optimización de procesos empresariales con SAP Business One y soluciones a medida.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


