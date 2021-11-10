import logo from './logo.svg';
import './App.css';
import Pelicula from './componentes/Pelicula';
import PageWrapper from './componentes/PageWrapper';
import movies from './data/movies.json'
import Paginacion from './componentes/Paginacion';
import { useState } from 'react';

function App() {

	const [paginaActual, setPaginaActual] = useState(1)
	const [peliculas, setPeliculas] = useState(movies)

	const cambiarPaginacion = (movies, actual) =>{
		movies = movies.slice((actual -1) * 5, actual*5)
	}
 
  const recorrer = ()=>{
	peliculas.map(peli=> {
		return	<Pelicula name={peli.titulo} image={peli.image} actores={peli.actores} director={peli.director}/>
	})
	
  	}

  const bodyMovies = (
    <PageWrapper>
      {peliculas.map((peli) => {
        return (
          <Pelicula
            name={peli.titulo}
            image={peli.img}
            actores={peli.actores}
            director={peli.director}
          >
            {peli.descripcion}
          </Pelicula>
        );
      })}

      <Paginacion
        pagina={paginaActual}
        total={4}
        onChange={(pagina) => {
			setPaginaActual(pagina)
        }}
      ></Paginacion>
    </PageWrapper>
  );

  return (
    <div>
      {bodyMovies}
    </div>
	
  );
}

export default App;
