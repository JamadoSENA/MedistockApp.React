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
    }
    //DELETE SCHEDULINGS

    return (
        <>
            <div>Dashboard Agendamientos</div>
            <Link to="/CrearAgendamiento" className='btn btn-primary'>Agregar agendamiento</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListAgendamientos.map((agendamiento, index) => (
                            <tr key={index}>
                                <td>{agendamiento.fecha}</td>
                                <td>{agendamiento.motivo}</td>
                                <td>{agendamiento.estado}</td>
                                <td>{agendamiento.FKId_Paciente}</td>
                                <td>
                                    <Link to = {`/DetailsScheduling/${agendamiento.idAgendamiento}`} ClassName = "btn btn-outline-primary mx-2">Detalles</Link>
                                    <Link to = {`/EditScheduling/${agendamiento.idAgendamiento}`} ClassName = "btn btn-outline-primary mx-2">Actualizar</Link>
                                    <button onClick={() => deleteAgendamiento (agendamiento.idAgendamiento)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
