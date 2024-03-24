import React from 'react';
import './App.css';
import './Bootstrap.min.css';
import './img/1.png';
import './img/2.png';
import './img/3.png';
import './img/Heading1.png';
import './img/Heading2.png';
import './img/Heading3.png';
import './img/ImagenPPAL.png';
import './img/LogoHeaderMediStock.png';
import './img/LogoHeadMediStock.png';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-3">
          <img src={require('./img/LogoHeaderMediStock.png')} alt="" width="auto" height="60"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto"></ul>
            <form className="form-inline mt-2 mt-md-0">
              <a href="../LogIn/index.html"><button className="btn btn-outline-success my-2 my-sm-0">Iniciar Sesion</button></a>
            </form>
          </div>
        </nav>
      </header>

      <main role="main">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"/>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>¡Bienvenido a MediStock!</h1>
                  <p>Administrar un inventario médico de forma eficiente y precisa es fundamental para cualquier institución de salud. Nuestra aplicación, MediStock, te ofrece la solución ideal para llevar un control exhaustivo de tus suministros.</p>
                  <br/><br/><br/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
            <img className="rounded-circle" src={require('./img/Heading1.png')} alt="Generic placeholder image" width="140" height="140"/>
              <br/><br/>
              <h2>Introducción a Medistock</h2>
              <br/>
              <p>Medistock es una plataforma innovadora que gestiona eficientemente el inventario médico. Facilita la coordinación entre proveedores y centros de salud, optimizando el suministro de equipos y medicamentos esenciales.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={require('./img/Heading2.png')} alt="Generic placeholder image" width="140" height="140"/>
              <br/><br/>
              <h2>Proceso de Seguimiento en Tiempo Real</h2>
              <br/>
              <p>Con Medistock, los usuarios pueden realizar un seguimiento en tiempo real de los niveles de inventario, evitando escasez o excesos. La plataforma utiliza tecnología avanzada para prever la demanda y garantizar una distribución equitativa y oportuna.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={require('./img/Heading3.png')} alt="Generic placeholder image" width="140" height="140"/>
              <br/><br/>
              <h2>Integración y Facilidad de Uso</h2>
              <br/>
              <p>Medistock se destaca por su interfaz intuitiva y su capacidad de integración con sistemas existentes. Permite una colaboración efectiva entre diferentes partes interesadas en el sector de la salud, mejorando la eficiencia y la calidad del cuidado.</p>
            </div>
          </div>


          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Impacto Inmediato de Medistock. <span className="text-muted">Revolucionando la Gestión de Inventario Médico.</span></h2>
              <p className="lead">Oh sí, esto es increíble. Medistock genera un impacto inmediato al optimizar la gestión del inventario médico. ¡Compruébalo por ti mismo y experimenta la eficiencia en tiempo real!</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={require('./img/1.png')} alt="Generic placeholder image"/>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Transformación Total con Medistock. <span className="text-muted">Optimización Eficiente y Distribución Oportuna.</span></h2>
              <p className="lead">Oh sí, esto es lo mejor. Medistock transforma por completo la gestión de suministros médicos. Con su seguimiento en tiempo real y fácil integración, marca la diferencia. Descúbrelo y únete a la revolución.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="featurette-image img-fluid mx-auto" src={require('./img/2.png')} alt="Generic placeholder image"/>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Simplicidad Potenciada por Medistock. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Oh sí, esto es simplemente genial. Medistock potencia la simplicidad en la gestión de inventarios médicos. ¿Quieres eficiencia sin complicaciones? Descubre Medistock y experimenta la facilidad de la excelencia.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={require('./img/3.png')} alt="Generic placeholder image"/>
            </div>
          </div>

          <hr className="featurette-divider"/>

        </div>

        {/* FOOTER */}
        <footer className="container">
          <p>&copy; 2024, MediStock. &middot; <a href="../Paginas de Error/Error404/index.html">Privacidad</a> &middot; <a href="../Paginas de Error/Error404/index.html">Términos</a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;