import logo from './logo.svg';
import './App.css';
import Pelicula from './componentes/pelicula';
import PageWrapper from './componentes/PageWrapper';

function App() {

	let peliculas = [
    {
      name: "Oblivion 1",
      image: "images/uploads/mv1.jpg",
      actores: "Camilo Penagos1",
      director: "Franco Wallos",
    },
    {
      name: "Oblivion 2",
      image: "images/uploads/mv1.jpg",
      actores: "Camilo Penagos1",
      director: "Franco Wallos",
    },
    {
      name: "Oblivion 3",
      image: "images/uploads/mv1.jpg",
      actores: "Camilo Penagos1",
      director: "Franco Wallos",
    },
  ];
 
  const recorrer = ()=>{
	peliculas.map(peli=> {
		return	<Pelicula name={peli.titulo} image={peli.image} actores={peli.actores} director={peli.director}/>
	})
	
  	}

  const bodyMovies = (
    <PageWrapper>
		{
			peliculas.map(peli=> {
				return	<Pelicula name={peli.titulo} image={peli.image} actores={peli.actores} director={peli.director}/>
			})
		}	
	</PageWrapper>
  )

  return (
    <div>
      {bodyMovies}
    </div>
  );
}

export default App;
