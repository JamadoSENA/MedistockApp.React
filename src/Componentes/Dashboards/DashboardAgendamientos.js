import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardAgendamientos = () => {

    const [ListAgendamientos, setListAgendamientos] = useState([]);

    useEffect(() => {
        getAgendamientos();
    }, []);

    //GET ALL SCHEDULINGS
    const getAgendamientos = () => {
        axios.get("http://localhost:8086/api/agendamiento/all")
            .then((response) => {
                setListAgendamientos(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL SCHEDULINGS


    //DELETE SCHEDULINGS
    const deleteAgendamiento = async (idAgendamiento) => {
        await axios.delete(`http://localhost:8086/api/agendamiento/delete/${idAgendamiento}`)
        getAgendamientos()
    };
    //DELETE SCHEDULINGS

    return (
        <div>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Dashboard de Agendamientos</h1>
        <div className="d-flex justify-content-between" style={{ marginBottom: '20px' }}>
          <Link to="/CreateScheduling" className='btn btn-primary'>Agregar Agendamiento</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Estado</th>
              <th>Paciente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ListAgendamientos.map((agendamiento, idAgendamiento) => (
              <tr key={idAgendamiento}>
                <td>{agendamiento.fecha}</td>
                <td>{agendamiento.motivo}</td>
                <td>{agendamiento.estado}</td>
                <td>{agendamiento.FKId_Paciente}</td>
                <td>
                  <Link to={`/EditScheduling/${agendamiento.idAgendamiento}`} className="btn btn-outline-primary mx-2">Actualizar</Link>
                  <button onClick={() => deleteAgendamiento(agendamiento.idAgendamiento)} className="btn btn-danger mx-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      );
}
