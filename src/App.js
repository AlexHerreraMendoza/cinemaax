import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Peliculas from './components/Peliculas';
import Recomendaciones from './components/Recomendaciones';
import Series from './components/Series';
import Pedidos from './components/Pedidos';
import Navbarprim from './layouts/Navbarprim';
import Footer1 from './layouts/Footer1';
import Creditos from './components/Creditos';


function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbarprim/>}>
            <Route index element={<Peliculas/>}/>
            <Route path='Series' element={<Series/>}/>
            <Route path='Recomendaciones' element={<Recomendaciones/>}/>
            <Route path='Pedidos' element={<Pedidos/>}/>
            <Route path='Creditos' element={<Creditos/>}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>  
      </BrowserRouter>
      </div>
      <Footer1/>
    </div>
  );
}

export default App;
