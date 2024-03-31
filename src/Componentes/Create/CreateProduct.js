import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateProduct = () => {

    let navigate = useNavigate()

    const [Producto, setProducto] = useState ({

        nombre:"",
        descripcion: "",
        indicacioneUso:"",
        fechaCaducidad:"",
        cantidad:"",
        estado:"",
        FkIdProveedor:""

    })

    const{nombre, descripcion, indicacioneUso, fechaCaducidad, cantidad, estado, FkIdProveedor} = Producto

    const onInputChange = (e) => {
       
        setProducto({...Producto, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/producto/create",Producto)
        navigate("DashboardProductos.js")

    };

  return (
   
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="formulario-registro">
            <h2>Crear producto</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" required />
              </div>
              <br />
              <div className="form-group">
                <label>Descripción</label>
                <input className="form-control" onChange={onInputChange} value={descripcion} type="text" name="descripcion" placeholder="Ingrese la descripción" required />
              </div>
              <br />
              <div className="form-group">
                <label>Indicaciones de uso</label>
                <input className="form-control" onChange={onInputChange} value={indicacioneUso} type="text" name="indicacioneUso" placeholder="Ingrese las indicaciones de uso" required />
              </div>
              <br />
              <div className="form-group">
                <label>Fecha de caducidad</label>
                <input className="form-control" onChange={onInputChange} value={fechaCaducidad} type="date" name="fechaCaducidad" placeholder="Ingrese la fecha de caducidad" required />
              </div>
              <br />
              <div className="form-group">
                <label>Cantidad</label>
                <input className="form-control" onChange={onInputChange} value={cantidad} type="number" name="cantidad" placeholder="Ingrese la cantidad" required />
              </div>
              <br />
              <div className="form-group">
                <label>Estado</label>
                <input className="form-control" onChange={onInputChange} value={estado} type="text" name="estado" placeholder="Ingrese el estado" required />
              </div>
              <br />
              <div className="form-group">
                <label>ID del proveedor</label>
                <input className="form-control" onChange={onInputChange} value={FkIdProveedor} type="number" name="FkIdProveedor" placeholder="Ingrese el ID del proveedor" required />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Registrar producto</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}