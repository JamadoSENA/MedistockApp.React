import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DashboardUsuarios } from './Componentes/Dashboards/DashboardUsuarios.js';
import { CrearUsuario } from './Componentes/Create/CreateUser.js';
import Header from './Componentes/Header.js';
import { EditUser } from './Componentes/Edit/EditUser.js';
import { DashboardProveedores } from './Componentes/Dashboards/DashboardProveedores.js';
import { DashboardProductos } from './Componentes/Dashboards/DashboardProductos.js';
import { DashboardPacientes } from './Componentes/Dashboards/DashboardPacientes.js';
import { DashboardCitas } from './Componentes/Dashboards/DashboardCitas.js';
import { DashboardAgendamientos } from './Componentes/Dashboards/DashboardAgendamientos.js';

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
          <Route path="/CrearUsuario" element = {<CrearUsuario />}/>
          <Route path="/EditUser/:identificacion" element = {<EditUser />}/>
        </Routes>   
    </div>    

    </>

  );
}

export default App;