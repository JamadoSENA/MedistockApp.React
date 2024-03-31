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

    const{nit, nombre, departamento, municipio, direccion, telefono, correo} = proveedor

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
        setProveedor(result.data.data);
      };
      loadProveedor();
    }, [idProveedor]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h2>Editar proveedor</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="nit">NIT</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={nit} type={"number"} name="nit" id="nit" placeholder="Ingrese el NIT" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={nombre} type={"text"} name="nombre" id="nombre" placeholder="Ingrese el nombre" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="departamento">Departamento</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={departamento} type={"text"} name="departamento" id="departamento" placeholder="Ingrese el departamento" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="municipio">Municipio</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={municipio} type={"text"} name="municipio" id="municipio" placeholder="Ingrese el municipio" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={direccion} type={"text"} name="direccion" id="direccion" placeholder="Ingrese la dirección" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={telefono} type={"number"} name="telefono" id="telefono" placeholder="Ingrese el número telefónico" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={correo} type={"email"} name="correo" id="correo" placeholder="Ingrese el correo electrónico" required />
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Editar proveedor</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}