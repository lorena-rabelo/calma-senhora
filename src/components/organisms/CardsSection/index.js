import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'

// const CardsSection = ({ number, nomeModulo }) => {
//   return (
//     <div className="section__cards">
//       <TitleSections
//         texto="Guia de Estudos" />
//       <div className="cardSection-container">
//         <Card number="I" nomeModulo="Introdução ao UX | HTML e CSS | GitHub | Web Design Responsivo" />
//         <Card number="II" nomeModulo="Lógica de Programação | Javascript " />
//         <Card number="III" nomeModulo="Pré-processadores | Bootstrap | Tecnologias Assistivas | Scrum" />
//         <Card number="IV" nomeModulo="Javascript | React" />
//       </div>
//     </div>
//   )
// }

class CardsSection extends Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <div className="section__cards">
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          <Card number="I" nomeModulo="Introdução ao UX | HTML e CSS | GitHub | Web Design Responsivo"/>

          <Card number="II" nomeModulo="Lógica de Programação | Javascript " />
          <Card number="III" nomeModulo="Pré-processadores | Bootstrap | Tecnologias Assistivas | Scrum" />
          <Card number="IV" nomeModulo="Javascript | React" />
        </div>
        <div className="article__sec">

          <div className="article">
            <div className="article__nametag">
              <h3>UX</h3>
            </div>
            <div className="article__container">

              <p className="article__text">Título explicativo do link Título explicativo do link Título explicativo do link</p>
            </div>
          </div>
          <div className="article">
            <div className="article__nametag">
              <h3>UX</h3>
            </div>
            <div className="article__container">

              <p className="article__text">Título explicativo do link Título explicativo do link Título explicativo do link</p>
            </div>
          </div>
          <div className="article">
            <div className="article__nametag">
              <h3>UX</h3>
            </div>
            <div className="article__container">

              <p className="article__text">Título explicativo do link Título explicativo do link Título explicativo do link</p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


export default CardsSection