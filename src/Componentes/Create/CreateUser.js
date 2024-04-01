import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {

    let navigate = useNavigate()

    const [Usuario, setUsuario] = useState ({

        documento:"",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        departamento:"",
        municipio:"",
        direccion:"",
        profesion:"",
        telefono: "",
        correo: "",
        contrasenia: "",
        FkId_Rol:""

    })

    const{documento, nombre, apellido, fechaNacimiento, departamento, municipio, direccion, profesion, telefono, correo, contrasenia, FkId_Rol} = Usuario

    const onInputChange = (e) => {
       
        setUsuario({...Usuario, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/usuario/create",Usuario)
        navigate("DashboardUsuarios.js")

    };

  return (
   
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="formulario-registro">
            <h2>Crear usuario</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Documento</label>
                <input className="form-control" onChange={onInputChange} value={documento} type="number" name="documento" placeholder="Ingrese el número de documento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" required />
              </div>
              <br />
              <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" onChange={onInputChange} value={apellido} type="text" name="apellido" placeholder="Ingrese el apellido" required />
              </div>
              <br />
              <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input className="form-control" onChange={onInputChange} value={fechaNacimiento} type="date" name="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Departamento</label>
                <input className="form-control" onChange={onInputChange} value={departamento} type="text" name="departamento" placeholder="Ingrese el departamento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Municipio</label>
                <input className="form-control" onChange={onInputChange} value={municipio} type="text" name="municipio" placeholder="Ingrese el municipio" required />
              </div>
              <br />
              <div className="form-group">
                <label>Dirección</label>
                <input className="form-control" onChange={onInputChange} value={direccion} type="text" name="direccion" placeholder="Ingrese la dirección" required />
              </div>
              <br />
              <div className="form-group">
                <label>Profesión</label>
                <input className="form-control" onChange={onInputChange} value={profesion} type="text" name="profesion" placeholder="Ingrese la profesión" required />
              </div>
              <br />
              <div className="form-group">
                <label>Teléfono</label>
                <input className="form-control" onChange={onInputChange} value={telefono} type="number" name="telefono" placeholder="Ingrese el número telefónico" required />
              </div>
              <br />
              <div className="form-group">
                <label>Correo electrónico</label>
                <input className="form-control" onChange={onInputChange} value={correo} type="email" name="correo" placeholder="Ingrese el correo electrónico" required />
              </div>
              <br />
              <div className="form-group">
                <label>Contraseña</label>
                <input className="form-control" onChange={onInputChange} value={contrasenia} type="password" name="contrasenia" placeholder="Ingrese la contraseña" required />
              </div>
              <br />
              <div className="form-group">
                <label>Rol del usuario</label>
                <input className="form-control" onChange={onInputChange} value={FkId_Rol} type="number" name="FkId_Rol" placeholder="Ingrese el ID del rol del usuario" />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Registrar usuario</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}