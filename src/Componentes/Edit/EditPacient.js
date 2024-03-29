import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditPacient = () => {

    let navigate = useNavigate()

    const {idPaciente} = useParams()

    const [Paciente, setPaciente] = useState ({

        documento:"",
        tipoDocumento:"",
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

    const{documento, tipoDocumento, nombre, apellido, fechaNacimiento, edad, departamento, municipio, direccion, profesion, telefono, correo} = Paciente

    const onInputChange = (e) => {
       
        setPaciente({...Paciente, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/paciente/update/${idPaciente}`, Paciente)
        navigate("DashboardPacientes.js");

    };

    useEffect(() => {
      
      const loadPaciente = async () => {
        const result = await axios.get(`http://localhost:8086/api/paciente/list/${idPaciente}`);
        setPaciente(result.data.data);
      };
      loadPaciente();
    }, [idPaciente]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Editar paciente</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
          <div className="documento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {documento} type={"number"} name="documento" placeholder="Ingrese el numero de documento" required />
            </div>
            <br />
            <div className="tipoDocumento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {tipoDocumento} type={"text"} name="tipoDocumento" placeholder="Ingrese el tipo de documento" required />
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
            <div className="edad">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {edad} type={"number"} name="edad" placeholder="Ingrese la edad" required />
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
            <div className="form-check mb-3">
              <button type="submit">Editar paciente</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}