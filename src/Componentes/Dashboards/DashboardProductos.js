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
        <>
            <div>Dashboard Productos</div>
            <Link to="/CrearProducto" className='btn btn-primary'>Agregar producto</Link>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Proveedor</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListProductos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.estado}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.FkId_Proveedor}</td>
                                <td>
                                    <Link to = {`/DetailsProduct/${producto.idProducto}`} ClassName = "btn btn-outline-primary mx-2">Detalles</Link>
                                    <Link to = {`/EditProduct/${producto.idProducto}`} ClassName = "btn btn-outline-primary mx-2">Actualizar</Link>
                                    <button onClick={() => deleteProducto (producto.idProducto)} ClassName = "btn btn-danger mx-2">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
