import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'
import logo from '../assets/logo.svg'

const GeneralTemplate = ({ children }) => {
  return (
    <div>
      <nav>
        <div className="nav__container">
      <img src={logo} alt="logo calma senhora" className="logo"></img>
        <span class="menu-hamburguer" id="menusuperior"></span>
          <ul className="nav__links">
            <li>
              <Link to="sobre" className="link">Sobre</Link>
              </li>
            <li>
            <Link to="roteiro" className="link">Roteiro de Estudo</Link>
              </li>
            <li>
            <Link to="colabore" className="link">Colabore</Link>
              </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <p>Desenvolvido em <b>React</b> por <b><a href="https://github.com/lorena-rabelo" target="blank">Lorena Rabelo</a></b></p>
      </footer>
    </div>
  )
}

export default GeneralTemplate;