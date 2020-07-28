import React from 'react'
import './styles.css'
import illustration from '../../../assets/calma-img.png'
import Botao from '../../atoms/Botao'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__text">
          <h1>Calma, senhora</h1>
          <p>Ajudando novas pessoas desenvolvedoras com um roteiro de estudo baseado em um bootcamp estruturado</p>
          <Botao texto = "Ver Roteiro"/>
        </div>      
      <div className="header__ilustration">
        <img src={illustration} alt="ilustraçao de uma mulher com megafone em direção ao título do projeto"></img>
      </div>
      </header>
    </>
  )
}

export default Header