import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import Swal from 'sweetalert2';
import Ciudad from "../components/Ciudad";
import Footer from '../components/Footer';
import E404 from '../components/E404';


const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);


  const date = new Date();
  var hour = date.getHours();
  
  useEffect(() => {
    if (hour > 7 && hour < 19) {
    document.body.classList.add('fondodia');
    } else
    document.body.classList.add('fondonoche');
  });



  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          for (var item of cities) {
            if (ciudad.id === item.id) {
              return Swal.fire(`${ciudad.name} that city already is being shown already!`)
            }
          }
          // Se agrega en ciudades
          setCities(oldCities => [...oldCities, ciudad]);
          // Si no se obtiene:
        } else {
          Swal.fire("City not found");
        }
      });
  }
  // OnFilter: parseInt pq seguro viene un string. Busca en un array la city que coincida con ese id. Toma como par??metro un elemento del array (la "c") y dentro de la funci??n agarra el id de cada uno de esos elementos para filtrar
  function onFilter(ciudadId) {
    debugger
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
        <div className="App"
        >
      {/* route captura la URL en la que uno est?? y muestra un componente o no como queremos que nav est?? siempre, va SIN exact*/}
      <Route
        path="/" 
        render={() => <Nav onSearch={onSearch}/>}
      />
      <div>
      <Switch>
      <Route
        path='/about' exact
        component={About}
        />
        {/* params siempre es un string, de la URL */}
        <Route
          exact path='/ciudad/:ciudadId' exact
          render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
        />
        {/* Las cards deben aparecer solo en "/" */}
        <Route
          path="/" exact
          render={() => 
          <Cards
            cities={cities}
            onClose={onClose}
          />}
        />
        <Route component={E404} />
      </Switch>
      
        <Route
        path="/" 
        render={() => <Footer/>}
      />
      </div>
      

    </div>
  );
}

export default App;