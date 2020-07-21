import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'
// import Article from '../../molecules/Article'
import Api from '../../../services/Api'

class CardsSection extends Component {
  constructor() {
    super()
    this.state = {
      modulos: []
    }
  }

  componentDidMount() {
    console.log('Componente foi montado')
    this.loadModulos();
  }

  loadModulos = async () => {
    const response = await Api.get(`/modulos`);
    this.setState({ modulos: response.data });
    console.log(response.data)
  };

  render() {
    const { modulos } = this.state;
    console.log(this.state)
    return (
      <div className="section__cards">
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          {modulos.map(({ numero, nome }) => (
            <Card
              number={numero}
              nomeModulo={nome}
            />
          ))}
        </div>

      </div>
    )
  }
}


export default CardsSection