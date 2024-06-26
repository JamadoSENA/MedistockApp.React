import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditUser = () => {

    let navigate = useNavigate()

    const {id} = useParams()

    const [usuario, setUsuario] = useState ({

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
      contrasenia: ""

    })

    const{documento, nombre, apellido, fechaNacimiento, departamento, municipio, direccion, profesion, telefono, correo, contrasenia} = usuario

    const onInputChange = (e) => {
       
        setUsuario({...usuario, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/usuario/update/${id}`,usuario)
        navigate("DashboardUsuarios.js");

    };

    useEffect(() => {
      
      const loadUsuario = async () => {
        const result = await axios.get(`http://localhost:8086/api/usuario/list/${id}`);
        setUsuario(result.data.data);
      };
      loadUsuario();
    }, [id]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Editar usuario</h1>
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
            
            <br />
            <div className="form-check mb-3">
              <button type="submit">Registrarse</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>
=======
          <h2>Editar usuario</h2>
          <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="documento">Documento</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={documento} type={"number"} name="documento" id="documento" placeholder="Ingrese el número de documento" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={nombre} type={"text"} name="nombre" id="nombre" placeholder="Ingrese el nombre" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={apellido} type={"text"} name="apellido" id="apellido" placeholder="Ingrese el apellido" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={fechaNacimiento} type={"date"} name="fechaNacimiento" id="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="departamento">Departamento</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={departamento} type={"text"} name="departamento" id="departamento" placeholder="Ingrese el departamento" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="municipio">Municipio</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={municipio} type={"text"} name="municipio" id="municipio" placeholder="Ingrese el municipio" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={direccion} type={"text"} name="direccion" id="direccion" placeholder="Ingrese la dirección" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="profesion">Profesión</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={profesion} type={"text"} name="profesion" id="profesion" placeholder="Ingrese la profesión" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={telefono} type={"number"} name="telefono" id="telefono" placeholder="Ingrese el número telefónico" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={correo} type={"email"} name="correo" id="correo" placeholder="Ingrese el correo electrónico" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="contrasenia">Contraseña</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={contrasenia} type={"password"} name="contrasenia" id="contrasenia" placeholder="Ingrese la contraseña" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="FkId_Rol">Rol del Usuario</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={FkId_Rol} type={"number"} name="FkId_Rol" id="FkId_Rol" placeholder="Ingrese el rol del usuario" />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Editar usuario</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>


        </div>

      </div>

    </div>

  </div>

  )
}