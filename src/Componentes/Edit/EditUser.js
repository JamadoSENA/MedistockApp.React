import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditUser = () => {

    let navigate = useNavigate()

    const {identificacion} = useParams()

    const [usuario, setUsuario] = useState ({

        identificacion: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        email: "",
        numCelular: "",
        direccion: "",
        contrasena: "",
        tipoUsuario: ""

    })

    const{ nombre, apellido, fechaNacimiento, email, numCelular, direccion, contrasena, tipoUsuario} = usuario

    const onInputChange = (e) => {
       
        setUsuario({...usuario, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/usuario/update/${identificacion}`,usuario)
        navigate("UsuariosAxios.js");

    };

    useEffect(() => {
      
      const loadUsuario = async () => {
        const result = await axios.get(`http://localhost:8086/api/usuario/list/${identificacion}`);
        setUsuario(result.data.data);
      };
      loadUsuario();
    }, [identificacion]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Editar usuario</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="identificacion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {identificacion} type={"number"} name="identificacion" placeholder="Ingrese su documento" required />
            </div>
            <br />
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombre} type={"text"} name="nombre" placeholder="Ingrese su Nombre" required />
            </div>
            <br />
            <div className="apellido">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {apellido} type={"text"} name="apellido" placeholder="Ingrese su Apellido" required />
            </div>
            <br />
            <div className="correo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {email} type={"email"} name="email" placeholder="Ingrese su Correo" required />
            </div>
            <br />
            <div className="contrasena">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {contrasena} type={"password"} name="contrasena" placeholder="Ingrese su Contraseña" required />
            </div>
            <br />
            <div className="fecha_nacimiento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fechaNacimiento} type={"date"} name="fechaNacimiento" placeholder="Ingrese su Fecha de Nacimiento" required />
            </div>
            <br />
            <div className="direccion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {direccion} type={"text"} name="direccion" placeholder="Ingrese su Dirección" required />
            </div>
            <br />
            <div className="Numero">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {numCelular} type={"number"} name="numCelular" placeholder="Ingrese su Numero Telefonico" required />
            </div>
            <div className="TipoUsuario">
              <input className="form-control" value = {tipoUsuario} onChange = {(e) => onInputChange(e)} type={"text"} name="tipoUsuario" placeholder="Ingrese el tipo de usuario" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="acepto_terminos" required />
              <label className="form-check-label" htmlFor="acepto_terminos">Acepto los Términos y Condiciones</label>
              <button type="submit">Registrarse</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}