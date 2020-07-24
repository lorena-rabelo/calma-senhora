import React from 'react';
import TituloSecao from '../../atoms/TituloSecao'
import './styles.css'
import Loop from '../../../assets/loop.png'
import Arrow from '../../../assets/arrow.png'

const ColaboreSecao = () => {
  return (
    <section className="ColaboreSecao" id="colabore">
      <div className="colabore__container">
        {/* <TituloSecao texto="Colabore" /> */}
        <h2>Quer acrescentar algum conteúdo?</h2>
        <h2>Entre em contato</h2>
        <img className="colabore--loop"src={Loop}></img>
      </div>
        {/* <img className="colabore--arrow"src={Arrow}></img> */}
    </section>
  )
}

export default ColaboreSecao;