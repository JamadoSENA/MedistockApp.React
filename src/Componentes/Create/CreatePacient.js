import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePacient = () => {

    let navigate = useNavigate()

    const [Paciente, setPaciente] = useState ({

        documento:"",
        tipoDocumento:"",
        genero:"",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        edad:"",
        departamento:"",
        municipio:"",
        direccion:"",
        profesion:"",
        telefono: "",
        correo: ""

    })

    const{documento, tipoDocumento, genero, nombre, apellido, fechaNacimiento, edad, departamento, municipio, direccion, profesion, telefono, correo} = Paciente

    const onInputChange = (e) => {
       
        setPaciente({...Paciente, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/paciente/create",Paciente)
        navigate("DashboardPacientes.js")

    };

  return (
   
    <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="formulario-registro">
          <h2>Crear paciente</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
            <label>Documento</label>
              <input className="form-control" onChange={onInputChange} value={documento} type="number" name="documento" placeholder="Número de documento" required />
            </div>
            <br />
            <div className="form-group">
            <label>Tipo documento</label>
              <input className="form-control" onChange={onInputChange} value={tipoDocumento} type="text" name="tipoDocumento" placeholder="Tipo de documento" required />
            </div>
            <br />
            <div className="form-group">
            <label>Genero</label>
              <input className="form-control" onChange={onInputChange} value={genero} type="text" name="genero" placeholder="Género" required />
            </div>
            <br />
            <div className="form-group">
            <label>Nombre</label>
              <input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Nombre" required />
            </div>
            <br />
            <div className="form-group">
            <label>Apellido</label>
              <input className="form-control" onChange={onInputChange} value={apellido} type="text" name="apellido" placeholder="Apellido" required />
            </div>
            <br />
            <div className="form-group">
            <label>Fecha Nacimiento</label>
              <input className="form-control" onChange={onInputChange} value={fechaNacimiento} type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento" required />
            </div>
            <br />
            <div className="form-group">
            <label>Edad</label>
              <input className="form-control" onChange={onInputChange} value={edad} type="number" name="edad" placeholder="Edad" required />
            </div>
            <br />
            <div className="form-group">
            <label>Departamento</label>
              <input className="form-control" onChange={onInputChange} value={departamento} type="text" name="departamento" placeholder="Departamento" required />
            </div>
            <br />
            <div className="form-group">
            <label>Municipio</label>
              <input className="form-control" onChange={onInputChange} value={municipio} type="text" name="municipio" placeholder="Municipio" required />
            </div>
            <br />
            <div className="form-group">
            <label>Direccion</label>
              <input className="form-control" onChange={onInputChange} value={direccion} type="text" name="direccion" placeholder="Dirección" required />
            </div>
            <br />
            <div className="form-group">
            <label>Profesion</label>
              <input className="form-control" onChange={onInputChange} value={profesion} type="text" name="profesion" placeholder="Profesión" required />
            </div>
            <br />
            <div className="form-group">
            <label>Telefono</label>
              <input className="form-control" onChange={onInputChange} value={telefono} type="number" name="telefono" placeholder="Teléfono" required />
            </div>
            <br />
            <div className="form-group">
            <label>Correo</label>
              <input className="form-control" onChange={onInputChange} value={correo} type="email" name="correo" placeholder="Correo electrónico" required />
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Registrar paciente</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>
        </div>
      </div>
    </div>
  </div>


  )
}