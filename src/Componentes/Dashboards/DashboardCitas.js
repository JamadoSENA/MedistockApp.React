import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardCitas = () => {

    const [ListCitas, setListCitas] = useState([]);

    useEffect(() => {
        getCitas();
    }, []);

    //GET ALL DATES
    const getCitas = () => {
        axios.get("http://localhost:8086/api/cita/all")
            .then((response) => {
                setListCitas(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL DATES


    //DELETE DATES
    const deleteCita = async (idCita) => {
        await axios.delete(`http://localhost:8086/api/cita/delete/${idCita}`)
        getCitas()
    }
    //DELETE DATES

    return (
        <div>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Dashboard Citas</h1>
        <div className="d-flex justify-content-between" style={{ marginBottom: '20px' }}>
          <Link to="/CreateDate" className='btn btn-primary'>Agregar Cita</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Diagnóstico</th>
              <th scope="col">Tratamiento</th>
              <th scope="col">Recomendaciones</th>
              <th scope="col">Médico</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ListCitas.map((cita, idCita) => (
              <tr key={idCita}>
                <td>{cita.fecha}</td>
                <td>{cita.diagnostico}</td>
                <td>{cita.tratamiento}</td>
                <td>{cita.recomendaciones}</td>
                <td>{cita.FkId_Medico}</td>
                <td>
                  <button onClick={() => deleteCita(cita.idCita)} className="btn btn-danger mx-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
