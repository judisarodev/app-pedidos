import React from "react";
import "./Menu.css"; 

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export { Menu };
