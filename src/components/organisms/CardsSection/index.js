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
      modulos: [],
      nome: ""
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

  onClick = (nome) => {
    console.log("clicou", nome)
    this.setState({ nome: nome })  
    this.getMaterial()
  }

  getMaterial = async () => {
    const { nome } = this.state;
    console.log('chamou getMaterial', nome)
  }

   render() {
    const { modulos } = this.state;
    console.log(this.state)
    return (
      <div className="section__cards">
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          {modulos.map(({ id, numero, nome }) => (
            <Card
              key={id}
              number={numero}
              nomeModulo={nome}
              onClick={() => this.onClick(nome)}
            />
          ))}
        </div>

      </div>
    )
  }
}


export default CardsSection