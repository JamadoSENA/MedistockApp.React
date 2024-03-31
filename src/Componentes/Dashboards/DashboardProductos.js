import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardProductos = () => {

    const [ListProductos, setListProductos] = useState([]);

    useEffect(() => {
        getProductos();
    }, []);

    //GET ALL PRODUCTS
    const getProductos = () => {
        axios.get("http://localhost:8086/api/producto/all")
            .then((response) => {
                setListProductos(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL PRODUCTS


    //DELETE PRODUCTS
    const deleteProducto = async (idProducto) => {
        await axios.delete(`http://localhost:8086/api/producto/delete/${idProducto}`)
        getProductos()
    }
    //DELETE PRODUCTS

    return (
        <div>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Dashboard Productos</h1>
        <div className="d-flex justify-content-between" style={{ marginBottom: '20px' }}>
          <Link to="/CreateProduct" className='btn btn-primary'>Agregar Producto</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Estado</th>
              <th scope="col">Descripción</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ListProductos.map((producto, idProducto) => (
              <tr key={idProducto}>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.estado}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.FkId_Proveedor}</td>
                <td>
                  <Link to={`/EditProduct/${producto.idProducto}`} className="btn btn-outline-primary mx-2">Actualizar</Link>
                  <button onClick={() => deleteProducto(producto.idProducto)} className="btn btn-danger mx-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
