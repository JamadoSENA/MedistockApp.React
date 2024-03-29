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

          <h1>Crear producto</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombre} type={"text"} name="nombre" placeholder="Ingrese el nombre" required />
            </div>
            <br />
            <div className="descripcion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {descripcion} type={"text"} name="descripcion" placeholder="Ingrese la descripcion" required />
            </div>
            <br />
            <div className="indicacioneUso">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {indicacioneUso} type={"text"} name="indicacioneUso" placeholder="Ingrese las indicaciones de uso" required />
            </div>
            <br />
            <div className="fechaCaducidad">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fechaCaducidad} type={"date"} name="fechaCaducidad" placeholder="Ingrese la fecha de caducidad" required />
            </div>
            <br />
            <div className="cantidad">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {cantidad} type={"number"} name="cantidad" placeholder="Ingrese la cantidad" required />
            </div>
            <br />
            <div className="FkId_Proveedor">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {FkIdProveedor} type={"number"} name="FkId_Proveedor" placeholder="Ingrese el id del proveedor" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Registrar producto</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}