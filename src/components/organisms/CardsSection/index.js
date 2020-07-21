import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'
import Article from '../../molecules/Article'
import Api from '../../../services/Api'


class CardsSection extends Component {
  constructor() {
    super()
    this.state = {
      modulos: [],
      materias: []
    }
  }

  componentDidMount() {
    console.log('Componente foi montado')
    this.loadModulos();
  }

  loadModulos = async () => {
    const response = await Api.get(`/modulos`);
    this.setState({ modulos: response.data });
    console.log(response)
    console.log(response.data)
  };

  onClick = async (materias) => {
    console.log("clicou", materias)
    await this.setState({ materias: materias });
    console.log(this.state.materias)
    // this.getMaterial()
  }

  // getMaterial = async () => {
  //   const { nome } = this.state;
  //   // console.log('chamou getMaterial', nome)
  //   console.log('chamou getMaterial', nome)
  // }

  render() {
    const { modulos, materias } = this.state;
    // console.log(this.state)
    return (
      <div className="section__cards">
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          {modulos.map(({ id, numero, nome, materias }) => (
            <Card
              key={id}
              number={numero}
              nomeModulo={nome}
              onClick={() => this.onClick(materias)}
            />
          ))}
          {/* {nome && <p>{nome}</p>} */}
        </div>

      </div>
    )
  }
}


export default CardsSection