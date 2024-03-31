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
            <h2>Crear cita</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Fecha</label>
                <input className="form-control" onChange={onInputChange} value={fecha} type="date" name="fecha" required />
              </div>
              <br />
              <div className="form-group">
                <label>Diagnóstico</label>
                <input className="form-control" onChange={onInputChange} value={diagnostico} type="text" name="diagnostico" required />
              </div>
              <br />
              <div className="form-group">
                <label>Tratamiento</label>
                <input className="form-control" onChange={onInputChange} value={tratamiento} type="text" name="tratamiento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Id del Agendamiento</label>
                <input className="form-control" onChange={onInputChange} value={FkId_Agendamiento} type="number" name="FkId_Agendamiento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Id del Médico</label>
                <input className="form-control" onChange={onInputChange} value={FkId_Medico} type="number" name="FkId_Medico" required />
              </div>
              <br />
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Registrar cita</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}