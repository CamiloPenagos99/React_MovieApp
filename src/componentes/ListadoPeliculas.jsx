import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  console.log("render ...");
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  let movieitems = [];

  useEffect(() => {
    console.log("fetch");
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const respuesta = ramdomTopics();
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=30f1a8e&s=${respuesta}`
    );
    const data = await res.json();
    let arrayMovies = data.Search;
    console.log("data fetch movies es", arrayMovies);
    setPeliculas(arrayMovies);
  };

  const ramdomTopics = () => {
    const indice = Math.floor(Math.random() * 10);
    const topics = [
      "action",
      "car",
      "bank",
      "city",
      "army",
      "mountaind",
      "war",
      "gun",
      "speed",
      "comedy",
    ];

    return topics[indice];
  };
  console.log("data movies is...", peliculas);

  //if(peliculas.length==0) return (<div>data loading...</div>)

  const totalPaginas = () => {
    let total = peliculas.length;
    let div = 4;
    return Math.ceil(total / div);
  };

  movieitems = peliculas.slice((paginaActual - 1) * 4, paginaActual * 4);

  totalPaginas();

  const bodyMovies = (
    <PageWrapper>
      {movieitems.map((peli) => {
        return (
          <Pelicula
            name={peli.Title}
            image={peli.Poster}
            year={peli.Year}
            id={peli.imdbID}
          />
        );
      })}

      <Paginacion
        pagina={paginaActual}
        total={totalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      ></Paginacion>
    </PageWrapper>
  );

  return <div>{bodyMovies}</div>;
}

export default ListadoPeliculas;
