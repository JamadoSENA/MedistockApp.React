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
       
        setPaciente({...Producto, [e.target.name]:e.target.value})

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

          <h1>Editar producto</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="fechaCaducidad">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fechaCaducidad} type={"date"} name="fechaCaducidad" placeholder="Ingrese la fecha de caducidad" required />
            </div>
            <br />
            <div className="cantidad">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {cantidad} type={"number"} name="cantidad" placeholder="Ingrese la cantidad" required />
            </div>
            <br />
            <div className="estado">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {estado} type={"text"} name="estado" placeholder="Ingrese el estado" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Editar producto</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}