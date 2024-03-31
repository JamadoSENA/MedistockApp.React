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
            <h2>Crear agendamiento</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Fecha</label>
                <input className="form-control" onChange={onInputChange} value={fecha} type="date" name="fecha" placeholder="Ingrese la fecha" required />
              </div>
              <br />
              <div className="form-group">
                <label>Motivo</label>
                <input className="form-control" onChange={onInputChange} value={motivo} type="text" name="motivo" placeholder="Ingrese el motivo" required />
              </div>
              <br />
              <div className="form-group">
                <label>Estado</label>
                <input className="form-control" onChange={onInputChange} value={estado} type="text" name="estado" placeholder="Ingrese el estado" required />
              </div>
              <br />
              <div className="form-group">
                <label>ID del paciente</label>
                <input className="form-control" onChange={onInputChange} value={FkId_Paciente} type="number" name="FkId_Paciente" placeholder="Ingrese el ID del paciente" required />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Registrar agendamiento</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}