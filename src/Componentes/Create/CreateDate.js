import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateDate = () => {

    let navigate = useNavigate()

    const [Cita, setCita] = useState ({

        fecha:"",
        diagnostico: "",
        tratamiento:"",
        recomendaciones:"",
        FkId_Agendamiento:"",
        FkId_Medico:""

    })

    const{fecha, diagnostico, tratamiento, FkId_Agendamiento, FkId_Medico} = Cita

    const onInputChange = (e) => {
       
        setCita({...Cita, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/cita/create",Cita)
        navigate("DashboardCitas.js")

    };

  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Crear cita</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="fecha">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fecha} type={"date"} name="fecha" placeholder="Ingrese la fecha" required />
            </div>
            <br />
            <div className="diagnostico">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {diagnostico} type={"text"} name="diagnostico" placeholder="Ingrese el diagnostico" required />
            </div>
            <br />
            <div className="tratamiento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {tratamiento} type={"text"} name="tratamiento" placeholder="Ingrese el tratamiento" required />
            </div>
            <br />
            <div className="FkId_Agendamiento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {FkId_Agendamiento} type={"number"} name="FkId_Agendamiento" placeholder="Ingrese el id del agendamiento" required />
            </div>
            <br />
            <div className="FkId_Medico">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {FkId_Medico} type={"number"} name="FkId_Medico" placeholder="Ingrese el id del medico" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Registrar cita</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}