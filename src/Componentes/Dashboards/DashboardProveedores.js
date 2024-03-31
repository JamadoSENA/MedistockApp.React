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
        <div>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Dashboard Proveedores</h1>
        <div className="d-flex justify-content-between" style={{ marginBottom: '20px' }}>
          <Link to="/CreateSupplier" className='btn btn-primary'>Agregar Proveedor</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NIT</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listProveedores.map((proveedor, idProveedor) => (
              <tr key={idProveedor}>
                <td>{proveedor.nit}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.departamento}</td>
                <td>{proveedor.telefono}</td>
                <td>{proveedor.correo}</td>
                <td>
                  <Link to={`/EditSupplier/${proveedor.idProveedor}`} className="btn btn-outline-primary mx-2">Actualizar</Link>
                  <button onClick={() => deleteProveedor(proveedor.idProveedor)} className="btn btn-danger mx-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
