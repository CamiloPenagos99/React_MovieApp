import logo from './logo.svg';
import './App.css';
import Pelicula from './componentes/Pelicula';
import PageWrapper from './componentes/PageWrapper';
import movies from './data/movies.json'
import Paginacion from './componentes/Paginacion';
import { useState } from 'react';

function App() {

	const [paginaActual, setPaginaActual] = useState(1)
	//const [peliculas, setPeliculas] = useState(movies)
  let peliculas = movies

  const totalPaginas = () =>{
    let total = movies.length
    let div = 4
    return Math.ceil(total/div)
  }
	
  peliculas = peliculas.slice((paginaActual -1) * 4, paginaActual*4)
	
  totalPaginas()
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
        total={totalPaginas()}
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
