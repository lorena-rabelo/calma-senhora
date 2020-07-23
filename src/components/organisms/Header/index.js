import React from 'react'
import './styles.css'
import illustration from '../../../assets/calma-img.png'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__text">
          <h1>
            Calma, senhora
        </h1>
          <p>Ajudando novas desenvolvedoras com um roteiro de estudo baseado em um bootcamp estruturado</p>
        </div>
      </header>
      <div className="header__ilustration">
        <img src={illustration} alt="ilustraçao de uma mulher com megafone em direção ao título do projeto"></img>
      </div>
    </>
  )
}

export default Header