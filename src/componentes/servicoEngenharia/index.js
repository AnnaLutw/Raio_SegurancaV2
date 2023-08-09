import './ServicoEngenharia.css'

const ServicoEngenharia = () =>{
    return(
        <div className='engenharia'>
            <img className='imgEngenharia' src='/imagens/engenharia.jpg'></img>
            <div className='Blocotexto'>
                <div className='texto'>           
                    <h4 className='titulo'>
                        Engenharia Civil
                    </h4>
                    <span>
                        Temos como objetivo a otimização de instalações físicas, o aumento da eficiência e a melhoria das edificações sob o cuidado da empresa
                    </span>
                    <ul>
                        <li>
                            Projetos estruturais
                        </li>
                        <li>
                            Projetos Arquitetônicos
                        </li>
                        <li>
                            Execução de obras
                        </li>
                    </ul>
                </div>
                <a href='https://api.whatsapp.com/send?phone=553192845683&text=Ol%C3%A1,%20estou%20interessado%20nos%20servi%C3%A7os%20da%20Raio.'>Converse conosco</a>
            </div>
            
        </div>
    )
}
export default ServicoEngenharia;