export default function Home() {
  return (
    <>
      <div className="first-section">
        <h1 className="primary-tittle"> Somos la empresa Soluciones Tecnológicas Danyris </h1>
      </div>
      <div className="first-section">
        <button className="btn btn-primary">
          <span className="font-button"> Ver más <i className="fas fa-arrow-right"></i> </span>
        </button>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className="tittle-numbers">+80</h1>
            <span className="font-numbers">soluciones</span>

          </div>
          <div class="col">
            <h1 className="tittle-numbers">98</h1>
            <span className="font-numbers">proyectos</span>
          </div>
          <div class="col">
            <h1 className="tittle-numbers">+90</h1>
            <span className="font-numbers">Clientes satisfechos</span>
          </div>
        </div>
      </div>

     
      
       
      <div class="container text-center">
        <h1 font-tittle2>Lo que Ofrecemos</h1>
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3"><img src='./img/services01.webp'></img><span>
              Outsourcing TI</span>
              <span>
              Outsourcing TI</span></div>
          </div>
          <div class="col-6">
            <div class="p-3"><img src='./img/services03.webp'></img><span>
              Soporte Tecnico</span></div>
          </div>
          <div class="col-6">
            <div class="p-3"><img src='./img/services02-1.webp'></img><span>
              Licenciamiento de Software</span></div>
          </div>
          <div class="col-6">
            <div class="p-3"><img src='./img/services05.webp'></img><span>
              Desarrollo de páginas web</span></div>
          </div>
        </div>
      </div>
    </>
  );
}