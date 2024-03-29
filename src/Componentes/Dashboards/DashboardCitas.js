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
        <>
            <div>Dashboard Citas</div>
            <Link to="/CrearCita" className='btn btn-primary'>Agregar cita</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Diagnostico</th>
                            <th scope="col">Tratamiento</th>
                            <th scope="col">Recomendaciones</th>
                            <th scope="col">Medico</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListCitas.map((cita, index) => (
                            <tr key={index}>
                                <td>{cita.fecha}</td>
                                <td>{cita.diagnostico}</td>
                                <td>{cita.tratamiento}</td>
                                <td>{cita.recomendaciones}</td>
                                <td>{cita.FkId_Medico}</td>
                                <td>
                                    <Link to = {`/DetailsDate/${cita.idCita}`} ClassName = "btn btn-outline-primary mx-2">Detalles</Link>
                                    <button onClick={() => deleteCita (cita.idCita)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
