import React from 'react'
import './styles.css'
import logo from '../assets/logo.svg'

const GeneralTemplate = ({ children }) => {
  return (
    <div>
      <nav>
        <div className="nav__container">
          <img src={logo} alt="logo calma senhora"></img>
          <ul>
            <li>Sobre</li>
            <li>Guia de Estudo</li>
          </ul>
        </div>
      </nav>
      {children}
      <footer>
        <p>Desenvolvido por <a href="https://github.com/lorena-rabelo" target="blank">Lorena Rabelo</a></p>
      </footer>
    </div>
  )
}

export default GeneralTemplate;