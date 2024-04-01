import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditScheduling = () => {

    let navigate = useNavigate()

    const {idAgendamiento} = useParams()

    const [Agendamiento, setAgendamiento] = useState ({
        
        fecha:"",
        estado:""

    })

    const{fecha, estado} = Agendamiento

    const onInputChange = (e) => {
       
        setAgendamiento({...Agendamiento, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/agendamiento/update/${idAgendamiento}`,Agendamiento)
        navigate("DashboardAgendamientos.js");

    };

    useEffect(() => {
      
      const loadAgendamiento = async () => {
        const result = await axios.get(`http://localhost:8086/api/agendamiento/list/${idAgendamiento}`);
        setAgendamiento(result.data.data);
      };
      loadAgendamiento();
    }, [idAgendamiento]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h2>Editar agendamiento</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={fecha} type={"date"} name="fecha" id="fecha" placeholder="Ingrese la fecha" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={estado} type={"text"} name="estado" id="estado" placeholder="Ingrese el estado" required />
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Editar agendamiento</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}