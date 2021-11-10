const Paginacion = (props) =>{

    const todo = ()=>{
       return props.onChange(props.pagina)
    }

    const paginacion = () => {
      const resultado = [];
      for (let index = 1; index <= props.total; index++) {
        const indicador = (
          <a className={props.pagina===index ? 'active': ''}  onClick={()=>{
            return props.onChange(index)
         }}>
            {index}
          </a>
        );
        resultado.push(indicador);
      }

      return resultado;
    };

    const pagi = (
        <div className="topbar-filter">
                            <div className="pagination2">
                                <span>Pagina: {props.pagina} de {props.total}:</span>
                                {paginacion()}
                                <a href="#"><i className="ion-arrow-right-b"></i></a>
                            </div>
                        </div>
    )
    return <div>{pagi}</div>
}

export default Paginacion
