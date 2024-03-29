import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateScheduling = () => {

    let navigate = useNavigate()

    const [Agendamiento, setAgendamiento] = useState ({

        fecha:"",
        motivo: "",
        estado:"",
        FkId_Paciente:""

    })

    const{fecha, motivo, estado, FkId_Paciente} = Agendamiento

    const onInputChange = (e) => {
       
        setAgendamiento({...Agendamiento, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/agendamiento/create",Agendamiento)
        navigate("DashboardAgendamientos.js")

    };

  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Crear agendamiento</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="fecha">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fecha} type={"date"} name="fecha" placeholder="Ingrese la fecha" required />
            </div>
            <br />
            <div className="motivo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {motivo} type={"text"} name="motivo" placeholder="Ingrese el motivo" required />
            </div>
            <br />
            <div className="estado">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {estado} type={"text"} name="estado" placeholder="Ingrese el estado" required />
            </div>
            <br />
            <div className="FkId_Paciente">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {FkId_Paciente} type={"number"} name="FkId_Paciente" placeholder="Ingrese el id del paciente" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Registrar agendamiento</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}