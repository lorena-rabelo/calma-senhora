import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'

const CardsSection = ({ number, nomeModulo }) => {
  return (
    <div className="section__cards">
      <TitleSections
        texto="Guia de Estudos" />
      <div className="cardSection-container">
        <Card number="I" nomeModulo="Introdução ao UX | HTML e CSS | GitHub | Web Design Responsivo" />
        <Card number="II" nomeModulo="Lógica de Programação | Javascript " />
        <Card number="III" nomeModulo="Pré-processadores | Bootstrap | Tecnologias Assistivas | Scrum" />
        <Card number="IV" nomeModulo="Javascript | React" />
      </div>
    </div>
  )
}


export default CardsSection