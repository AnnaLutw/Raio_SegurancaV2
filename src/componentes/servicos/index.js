import './Servicos.css'

const Servicos = (props) =>{
    return (
        
        <div className='servicos' >
           
            <hr></hr>
            <h1 className='titulo'>
                SERVIÇOS
            </h1>
            <hr></hr>
          {props.servicos.map((servico, index) => (
            <div key={index} className="card" >
              <img className='imgCard' src={servico.img} alt="" />
              <div className="card-body">
                <h5 className="card-name">{servico.nome}</h5>
                <p className='card-text'>{servico.descricao}</p>
              </div>
            </div>
          ))}
           <hr></hr>
           <hr></hr>
        </div>
      );
    };
export default Servicos;