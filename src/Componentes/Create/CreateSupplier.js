import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateSupplier = () => {

    let navigate = useNavigate()

    const [Proveedor, setProveedor] = useState ({

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
       
        setProveedor({...Proveedor, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/proveedor/create",Proveedor)
        navigate("DashboardProveedores.js")

    };

  return (
   
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="formulario-registro">
            <h2>Crear proveedor</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>NIT</label>
                <input className="form-control" onChange={onInputChange} value={nit} type="number" name="nit" placeholder="Ingrese el NIT" required />
              </div>
              <br />
              <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" required />
              </div>
              <br />
              <div className="form-group">
                <label>Departamento</label>
                <input className="form-control" onChange={onInputChange} value={departamento} type="text" name="departamento" placeholder="Ingrese el departamento" required />
              </div>
              <br />
              <div className="form-group">
                <label>Municipio</label>
                <input className="form-control" onChange={onInputChange} value={municipio} type="text" name="municipio" placeholder="Ingrese el municipio" required />
              </div>
              <br />
              <div className="form-group">
                <label>Dirección</label>
                <input className="form-control" onChange={onInputChange} value={direccion} type="text" name="direccion" placeholder="Ingrese la dirección" required />
              </div>
              <br />
              <div className="form-group">
                <label>Teléfono</label>
                <input className="form-control" onChange={onInputChange} value={telefono} type="number" name="telefono" placeholder="Ingrese el número telefónico" required />
              </div>
              <br />
              <div className="form-group">
                <label>Correo electrónico</label>
                <input className="form-control" onChange={onInputChange} value={correo} type="email" name="correo" placeholder="Ingrese el correo electrónico" required />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Registrar proveedor</button>
              </div>
            </form>
            <div id="mensajeError" className="mensaje-error"></div>
          </div>
        </div>
      </div>
    </div>

  )
}