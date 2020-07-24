import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'
import logo from '../assets/logo.svg'

const GeneralTemplate = ({ children }) => {
  return (
    <div>
      <nav>
        <div className="nav__container">
        <Link to="/"><img src={logo} alt="logo calma senhora" className="logo"></img></Link>
          <ul>
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