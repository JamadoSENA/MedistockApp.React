import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DashboardUsuarios } from './Componentes/Dashboards/DashboardUsuarios.js';
import { CrearUsuario } from './Componentes/Create/CreateUser.js';
import Header from './Componentes/Header.js';
import { EditUser } from './Componentes/Edit/EditUser.js';

function App() {

  return (
    <>
    <Header />
    <div className="App">
         <Routes>
          <Route path="/CrearUsuario" element = {<CrearUsuario />}/>
          <Route path="/ListUser" element = {<DashboardUsuarios />}/>
          <Route path="/EditUser/:identificacion" element = {<EditUser />}/>
        </Routes>   
    </div>    

    </>

  );
}

export default App;