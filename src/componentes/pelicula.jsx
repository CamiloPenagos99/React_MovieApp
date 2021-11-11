function Pelicula(props) {
  const test = (
    <div className="movie-item-style-2">
    <img src={props.image} alt="" />
    <div className="mv-item-infor">
      <h6>
        <a href="moviesingle.html">
          {props.name} <span>{props.year}</span>
        </a>
      </h6>
      <p className="rate">
        <i className="ion-android-star"></i>
        <span>8.1</span> /10
      </p>
      <p className="describe">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita assumenda aliquam modi officia aut eos! Dolores enim commodi quae voluptatibus.
      </p>
      <p className="run-time">
        {" "}
        Run Time: 2h21’ . <span>{props.id} </span> .{" "}
        <span>Release: {props.year}</span>
      </p>
      <p>
        Director: <a href="#">Lorem.</a>
      </p>
      <p>
        Stars: Lorem, ipsum dolor.
      </p>
    </div>
  </div>
  )

  return (<div>{test}</div>);
}

export default Pelicula;
