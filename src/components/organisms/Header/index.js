import React from 'react'
import './styles.css'
import  illustration  from '../../../assets/calma-img.png'

const Header = () => {
  return(
    <header className="header">
      <div className="header__text">
        <h1>
          Calma, senhora
        </h1>
        <p>Ajudando novas desenvolvedoras com um roteiro de estudo baseado em um bootcamp estruturado</p>
      </div>
      <img src={ illustration }className="header__ilustration" alt="ilustraçao de uma mulher com megafone em direção ao título do projeto"></img>
    </header>
  )
}

export default Header