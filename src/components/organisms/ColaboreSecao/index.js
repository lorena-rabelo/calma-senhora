import React from 'react';
import TituloSecao from '../../atoms/TituloSecao'
import './styles.css'
import Loop from '../../../assets/loop.png'
import Arrow from '../../../assets/arrow.png'
import Twitter from '../../../assets/logo_twitter.png'
import Github from '../../../assets/logo_github.png'
import Mail from '../../../assets/mail.png'

const ColaboreSecao = () => {
  return (
    <section className="ColaboreSecao" id="colabore">
      <div className="colabore__container">
        <div>          {/* <TituloSecao texto="Colabore" /> */}
          <h2>Quer acrescentar algum conteúdo?</h2>
          <h2>Entre em contato</h2>
          <img className="colabore--loop" src={Loop}></img>
          {/* <img className="colabore--arrow" src={Arrow}></img> */}
        </div>
        <div className="colabore__container--arrow-redes">
          <ul>
            <li><a href="mailto:ola.lorenarabelo@gmail.com"><img src={Mail} className="colabores--icones"></img></a></li>
            <li><a><img href="https://twitter.com/hi____lorena" src={Twitter} className="colabores--icones"></img></a></li>
            <li><a href="https://github.com/lorena-rabelo/calma-senhora"><img src={Github} className="colabores--icones"></img></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ColaboreSecao;