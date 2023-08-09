import './Slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/imagens/teste.jpg" alt="First slide" />
                    <h2 className='h2'>Precisa de um Engenheiro Civil?</h2>
                    <a className='a' href="#">VEJA</a>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/imagens/teste.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/imagens/teste.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Proximo</span>
            </a>
        </div>
    )
}

export default Slider;