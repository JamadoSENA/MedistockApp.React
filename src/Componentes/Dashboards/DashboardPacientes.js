import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardPacientes = () => {

    const [ListPacientes, setListPacientes] = useState([]);

    useEffect(() => {
        getPacientes();
    }, []);

    //GET ALL PACIENTS
    const getPacientes = () => {
        axios.get("http://localhost:8086/api/paciente/all")
            .then((response) => {
                setListPacientes(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL PACIENTS


    //DELETE PACIENTS
    const deletePaciente = async (idPaciente) => {
        await axios.delete(`http://localhost:8086/api/paciente/delete/${idPaciente}`)
        getPacientes()
    }
    //DELETE PACIENTS

    return (
        <>
            <div>Dashboard Pacientes</div>
            <Link to="/CreatePacient" className='btn btn-primary'>Agregar paciente</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListPacientes.map((paciente, index) => (
                            <tr key={index}>
                                <td>{paciente.documento}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.telefono}</td>
                                <td>{paciente.correo}</td>
                                <td>
                                    <Link to = {`/EditPacient/${paciente.idPaciente}`} ClassName = "btn btn-outline-primary mx-2">Actualizar</Link>
                                    <button onClick={() => deletePaciente (paciente.idPaciente)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
