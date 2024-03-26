// LoginForm.js
import React from 'react';
import './img/ImagenFondo.jpg';




const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica para manejar el inicio de sesión
  };

  return (
    <div className="form-panel">
      <div className="logo mb-5">
        <img src={require('./img/LogoColorVerde.png')} alt="logo" />
        <p className="text-center mt-20">
          <span className="d-block fw-bold mb-10 fs-6">¡Hola! comencemos</span> Inicia sesión para continuar.
        </p>
      </div>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="form-group has-icon-left">
            <input type="text" className="form-control form-control-lg" placeholder="@username" />
            <div className="form-control-icon">
              <i className="bi bi-person-fill"></i>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-group has-icon-left">
            <input type="password" className="form-control form-control-lg" placeholder="Password" />
            <div className="form-control-icon">
              <i className="bi bi-key-fill"></i>
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-lg btn-success w-100">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
