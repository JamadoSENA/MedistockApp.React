import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditSupplier = () => {

    let navigate = useNavigate()

    const {idProveedor} = useParams()

    const [proveedor, setProveedor] = useState ({

        nit:"",
        nombre: "",
        departamento:"",
        municipio:"",
        direccion:"",
        telefono: "",
        correo: ""

    })

    const{nit, nombre, departamento, municipio, direccion, telefono, correo} = Proveedor

    const onInputChange = (e) => {
       
        setProveedor({...proveedor, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/proveedor/update/${idProveedor}`,proveedor)
        navigate("DashboardProveedores.js");

    };

    useEffect(() => {
      
      const loadProveedor = async () => {
        const result = await axios.get(`http://localhost:8086/api/proveedor/list/${idProveedor}`);
        setUsuario(result.data.data);
      };
      loadProveedor();
    }, [idProveedor]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Editar proveedor</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
          <div className="nit">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nit} type={"number"} name="nit" placeholder="Ingrese el nit" required />
            </div>
            <br />
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombre} type={"text"} name="nombre" placeholder="Ingrese el nombre" required />
            </div>
            <br />
            <div className="departamento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {departamento} type={"text"} name="departamento" placeholder="Ingrese el departamento" required />
            </div>
            <br />
            <div className="municipio">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {municipio} type={"text"} name="municipio" placeholder="Ingrese el municipio" required />
            </div>
            <br />
            <div className="direccion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {direccion} type={"text"} name="direccion" placeholder="Ingrese la dirección" required />
            </div>
            <br />
            <div className="telefono">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {telefono} type={"number"} name="telefono" placeholder="Ingrese el numero telefonico" required />
            </div>
            <br />
            <div className="correo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {correo} type={"email"} name="correo" placeholder="Ingrese el correo electronico" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Editar proveedor</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}