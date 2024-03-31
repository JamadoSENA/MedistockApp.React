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
            <h2>Editar paciente</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="documento">Documento</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={documento} type={"number"} name="documento" id="documento" placeholder="Ingrese el numero de documento" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="tipoDocumento">Tipo de Documento</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={tipoDocumento} type={"text"} name="tipoDocumento" id="tipoDocumento" placeholder="Ingrese el tipo de documento" required />
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
                <label htmlFor="edad">Edad</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={edad} type={"number"} name="edad" id="edad" placeholder="Ingrese la edad" required />
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
                <input className="form-control" onChange={(e) => onInputChange(e)} value={profesion} type={"text"} name="profesion" id="profesion" placeholder="Ingrese la profesion" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={telefono} type={"number"} name="telefono" id="telefono" placeholder="Ingrese el numero telefonico" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input className="form-control" onChange={(e) => onInputChange(e)} value={correo} type={"email"} name="correo" id="correo" placeholder="Ingrese el correo electronico" required />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Editar paciente</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}