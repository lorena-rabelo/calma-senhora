import React, { Component } from 'react'
import { Link } from "react-scroll";
import './styles.css'
import logo from '../assets/logo.svg'




class GeneralTemplate extends Component {
  constructor() {
    super()
    this.state = {
      menuVisivel: false
    }
  }

  toggleActive = () => {
    this.setState({ menuVisivel: !this.state.menuVisivel })
  }

  render() {

    const { children } = this.props;
    const { menuVisivel } = this.state;
    return (
      <div>
        <nav className={`nav ${menuVisivel && "active"}`}>
          <div className="nav__container">
            <img src={logo} alt="logo calma senhora" className={`logo ${menuVisivel && "active"}`}></img>
            <span class={`menu-hamburguer ${menuVisivel  && "active"}`} onClick={this.toggleActive} ></span>
            <ul className={`nav__links ${menuVisivel && "active"}`} >
              <li>
                <Link to="sobre" className="link" onClick={this.toggleActive}>Sobre</Link>
              </li>
              <li>
                <Link to="roteiro" className="link" onClick={this.toggleActive}>Roteiro de Estudo</Link>
              </li>
              <li>
                <Link to="colabore" className="link" onClick={this.toggleActive}>Colabore</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>Desenvolvido em <b>React</b> por <b><a href="https://www.linkedin.com/in/lorena-rabelo/" target="blank">Lorena Rabelo</a></b></p>
        </footer>
      </div>
    )
  }
}

export default GeneralTemplate;