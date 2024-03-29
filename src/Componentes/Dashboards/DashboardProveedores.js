import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardProveedores = () => {

    const [listProveedores, setListProveedores] = useState([]);

    useEffect(() => {
        getProveedores();
    }, []);

    //GET ALL SUPPLIERS
    const getProveedores = () => {
        axios.get("http://localhost:8086/api/proveedor/all")
            .then((response) => {
                setListProveedores(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL SUPPLIERS


    //DELETE SUPPLIERS
    const deleteProveedor = async (idProveedor) => {
        await axios.delete(`http://localhost:8086/api/proveedor/delete/${idProveedor}`)
        getProveedores()
    }
    //DELETE SUPPLIERS

    return (
        <>
            <div>Dashboard Proveedores</div>
            <Link to="/CreateSupplier" className='btn btn-primary'>Agregar proveedor</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">NIT</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProveedores.map((proveedor, index) => (
                            <tr key={index}>
                                <td>{proveedor.nit}</td>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.departamento}</td>
                                <td>{proveedor.telefono}</td>
                                <td>{proveedor.correo}</td>
                                <td>
                                    <Link to = {`/EditSupplier/${proveedor.idProveedor}`} ClassName = "btn btn-outline-primary mx-2">Actualizar</Link>
                                    <button onClick={() => deleteProveedor (proveedor.idProveedor)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
