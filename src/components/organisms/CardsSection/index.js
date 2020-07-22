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
      materias: [],
      links: []
    }
  }

  componentDidMount() {
    console.log('Componente foi montado')
    this.loadModulos();
    console.log(this.state.materias)
  }

  loadModulos = async () => {
    const response = await Api.get(`/modulos`);
    this.setState({ modulos: response.data });
  };

  onClick = async (materias) => {
    console.log("clicou", materias)
    await this.setState({ materias: materias });
    console.log(materias)
    this.getMaterial()
  }

  getMaterial = () => {
    const { materias, links } = this.state;
    let content = []
    let teste;
    materias.forEach((item) => {
      console.log(item.artigos)
      teste = item.artigos// content.concat(item.artigos)
      teste.forEach((item) => content.push(item))
      console.log(teste)
    })

    console.log(content)

  }

  render() {
    const { modulos, materias } = this.state;
    console.log("O componente foi renderizado")
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
              onClick={() => this.onClick(materias)} />
          ))}
          <div className="article__sec">
            {materias.map((item) => (

              <Article
                aboutLink={""}
              />
              // console.log(item)
            ))}
          </div>
        </div>

      </div>
    )
  }
}


export default CardsSection