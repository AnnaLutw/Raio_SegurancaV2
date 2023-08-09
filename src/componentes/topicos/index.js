import './Topico.css'
import React, { useState } from "react";


const Topico = () => {
    return (
        <div className="topico">
        

            <ul className="lista">
                <li className="info">
                    <div className='card'>
                        <img style={{ width: '150px' }} src="/imagens/trabalhador.png" alt="" />
                        Segurança em geral
                    </div>

                </li>
                <li className="info">
                    <div className='card'>
                        <img style={{ width: '150px' }} src="/imagens/confianca.png" alt="" />
                        Assistência 24 horas
                    </div>
                </li>
                <li className="info">
                    <div className='card'>
                        <img style={{ width: '150px' }} src="/imagens/profissionalismo.png" alt="" />
                        Prestação de serviço de primeira
                    </div>
                </li>
                <li className="info">
                    <div className='card'>
                        <img style={{ width: '150px' }} src="/imagens/satisfacao.png" alt="" />
                        Qualidade e satistação
                    </div>
                </li>
            </ul>
            <br></br>

           
        </div>


    )
}
export default Topico;