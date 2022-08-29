import React from "react";
import logo from "./img/logo.png";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src= {logo} style={{width: 100}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                    <li class="nav-item">
                        <a className="nav-link" href="#">Herramientas
                        <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Materiales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cursos</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

} 
export default Header;