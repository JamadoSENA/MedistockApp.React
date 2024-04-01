import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditProduct = () => {

    let navigate = useNavigate()

    const {idProducto} = useParams()

    const [Producto, setProducto] = useState ({

        fechaCaducidad:"",
        cantidad:"",
        estado:""

    })

    const{fechaCaducidad, cantidad, estado} = Producto

    const onInputChange = (e) => {
       
        setProducto({...Producto, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/producto/update/${idProducto}`, Producto)
        navigate("DashboardProductos.js");

    };

    useEffect(() => {
      
      const loadProducto = async () => {
        const result = await axios.get(`http://localhost:8086/api/producto/list/${idProducto}`);
        setProducto(result.data.data);
      };
      loadProducto();
    }, [idProducto]);


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h2>Editar producto</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="fechaCaducidad">Fecha de Caducidad</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={fechaCaducidad} type={"date"} name="fechaCaducidad" id="fechaCaducidad" placeholder="Ingrese la fecha de caducidad" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="cantidad">Cantidad</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={cantidad} type={"number"} name="cantidad" id="cantidad" placeholder="Ingrese la cantidad" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input className="form-control" onChange={(e) => onInputChange(e)} value={estado} type={"text"} name="estado" id="estado" placeholder="Ingrese el estado" required />
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Editar producto</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}