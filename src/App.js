import React from 'react' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Peliculas from './pages/Peliculas'
import Navbar from './Components/Navbar';
import Actores from './pages/Actores';
import CrearPeliculas from './pages/CrearPeliculas';
import CrearActor from './pages/CrearActor';
import DetallePeliculas from './pages/DetallePelicula';
import DetallesActor from './pages/detallesActor';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Peliculas/>}  />
          <Route exact path='/crear-pelicula' element={<CrearPeliculas/>}  />
          <Route exact path='/actores' element={<Actores/>}  />
          <Route exact path='/crear-actores' element={<CrearActor/>}  />
          <Route exact path='/detalle-pelicula/:id' element={<DetallePeliculas/>}  />
          <Route exact path='/detalle-actor/:id' element={ <DetallesActor /> }  />
        </Routes>
    </Router>
  );
}

export default App;
