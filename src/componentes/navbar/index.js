import './NavBar.css'
import React, { useState } from "react";

const NavBar = () =>{
    const [isOpen, setOpen] = useState(false);
    return(
        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/imagens/logo.jpg" alt="Logo" class="logo"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav"> 
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">SERVIÇOS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTÚDOS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SOBRE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://api.whatsapp.com/send?phone=553192845683&text=Ol%C3%A1,%20estou%20interessado%20nos%20servi%C3%A7os%20da%20Raio.">FALE CONOSCO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;