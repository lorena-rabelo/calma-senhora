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
            <li><img src={Mail} className="colabores--icones"></img></li>
            <li><img src={Twitter} className="colabores--icones"></img></li>
            <li><img src={Github} className="colabores--icones"></img></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ColaboreSecao;