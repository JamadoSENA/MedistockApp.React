import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header.js';
import { DashboardUsuarios } from './Componentes/Dashboards/DashboardUsuarios.js';
import { DashboardProveedores } from './Componentes/Dashboards/DashboardProveedores.js';
import { DashboardProductos } from './Componentes/Dashboards/DashboardProductos.js';
import { DashboardPacientes } from './Componentes/Dashboards/DashboardPacientes.js';
import { DashboardCitas } from './Componentes/Dashboards/DashboardCitas.js';
import { DashboardAgendamientos } from './Componentes/Dashboards/DashboardAgendamientos.js';
import { CreateDate } from './Componentes/Create/CreateDate.js';
import { CreatePacient } from './Componentes/Create/CreatePacient.js';
import { CreateProduct } from './Componentes/Create/CreateProduct.js';
import { CreateScheduling } from './Componentes/Create/CreateScheduling.js';
import { CreateSupplier } from './Componentes/Create/CreateSupplier.js';
import { CreateUser } from './Componentes/Create/CreateUser.js';
import { EditUser } from './Componentes/Edit/EditUser.js';
import { EditPacient } from './Componentes/Edit/EditPacient.js';
import { EditScheduling } from './Componentes/Edit/EditScheduling.js';
import { EditProduct } from './Componentes/Edit/EditProduct.js';
import { EditSupplier } from './Componentes/Edit/EditSupplier.js';

function App() {

  return (
    <>
    <Header />
    <div className="App">
         <Routes>
          <Route path="/ListUser" element = {<DashboardUsuarios />}/>
          <Route path="/ListSupplier" element = {<DashboardProveedores />}/>
          <Route path="/ListProduct" element = {<DashboardProductos />}/>
          <Route path="/ListPacient" element = {<DashboardPacientes />}/>
          <Route path="/ListDate" element = {<DashboardCitas />}/>
          <Route path="/ListScheduling" element = {<DashboardAgendamientos />}/>
          <Route path="/CreateUser" element = {<CreateUser />}/>
          <Route path="/CreateDate" element = {<CreateDate />}/>
          <Route path="/CreatePacient" element = {<CreatePacient />}/>
          <Route path="/CreateProduct" element = {<CreateProduct />}/>
          <Route path="/CreateScheduling" element = {<CreateScheduling />}/>
          <Route path="/CreateSupplier" element = {<CreateSupplier />}/>
          <Route path="/EditUser/:id" element = {<EditUser />}/>
          <Route path="/EditPacient/:id" element = {<EditPacient />}/>
          <Route path="/EditProduct/:id" element = {<EditProduct />}/>
          <Route path="/EditScheduling/:id" element = {<EditScheduling />}/>
          <Route path="/EditSupplier/:id" element = {<EditSupplier />}/>
        </Routes>   
    </div>    

    </>

  );
}

export default App;