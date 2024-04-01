import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardUsuarios = () => {

    const [listUsuarios, setListUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    //GET ALL USERS
    const getUsuarios = () => {
        axios.get("http://localhost:8086/api/usuario/all")
            .then((response) => {
                setListUsuarios(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL USERS


    //DELETE USERS
    const deleteUsuario = async (idUsuario) => {
        await axios.delete(`http://localhost:8086/api/usuario/delete/${idUsuario}`)
        getUsuarios()
    }
    //DELETE USERS

    return (
        <>
            <div>Dashboard Usuarios</div>
            <Link to="/CreateUser" className='btn btn-primary'>Agregar usuario</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.documento}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.direccion}</td>
                                <td>
                                    <Link to = {`/EditUser/${usuario.id}`} ClassName = "btn btn-outline-primary mx-2">Actualizar</Link>
                                    <button onClick={() => deleteUsuario (usuario.id)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
