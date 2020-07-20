import React from 'react'
import './styles.css'
import logo from '../assets/logo.svg'

const GeneralTemplate = ({ children }) => {
  return (
    <div>
      <nav>
        <div className="nav__container">
        <a href="#"><img src={logo} alt="logo calma senhora"></img></a>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Guia de Estudo</a></li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <p>Desenvolvido por <b><a href="https://github.com/lorena-rabelo" target="blank">Lorena Rabelo</a></b></p>
      </footer>
    </div>
  )
}

export default GeneralTemplate;