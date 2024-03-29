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

          <h1>Crear usuario</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="documento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {documento} type={"number"} name="documento" placeholder="Ingrese el numero documento" required />
            </div>
            <br />
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombre} type={"text"} name="nombre" placeholder="Ingrese el nombre" required />
            </div>
            <br />
            <div className="apellido">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {apellido} type={"text"} name="apellido" placeholder="Ingrese el apellido" required />
            </div>
            <br />
            <div className="fechaNacimiento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fechaNacimiento} type={"date"} name="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento" required />
            </div>
            <br />
            <div className="departamento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {departamento} type={"text"} name="departamento" placeholder="Ingrese el departamento" required />
            </div>
            <br />
            <div className="municipio">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {municipio} type={"text"} name="municipio" placeholder="Ingrese el municipio" required />
            </div>
            <br />
            <div className="direccion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {direccion} type={"text"} name="direccion" placeholder="Ingrese la dirección" required />
            </div>
            <br />
            <div className="profesion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {profesion} type={"text"} name="profesion" placeholder="Ingrese la profesion" required />
            </div>
            <br />
            <div className="telefono">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {telefono} type={"number"} name="telefono" placeholder="Ingrese el numero telefonico" required />
            </div>
            <br />
            <div className="correo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {correo} type={"email"} name="correo" placeholder="Ingrese el correo electronico" required />
            </div>
            <br />
            <div className="contrasenia">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {contrasenia} type={"password"} name="contrasenia" placeholder="Ingrese la contraseña" required />
            </div>
            <br />
            <div className="FkId_Rol">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {FkId_Rol} type={"number"} name="FkId_Rol" placeholder="Ingrese el rol del usuario" />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Registrar usuario</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}