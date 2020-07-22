import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'
import Article from '../../atoms/Article'
import Api from '../../../services/Api'
import Modulo1 from '../../../Modulo1'



class CardsSection extends Component {
  constructor() {
    super()
    this.state = {
      modulos: [],
      materias: [],
      links: [],
      acaba: "",
      display: false,
      deusSouEuDeNovo: ""
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

  onClick = async (materias, id) => {
    console.log("clicou", materias)
    await this.setState({ materias: materias });
    console.log(materias)
    this.getMaterial()
    console.log('modulo1', Modulo1)
    this.setState({ acaba: Modulo1, display: true, deusSouEuDeNovo : id })
  }

  getMaterial = () => {
    const { materias, links } = this.state;
    let content = []
    let teste;
    materias.forEach((item) => {
      console.log(item.artigos)
      teste = item.artigos// content.concat(item.artigos)
      teste.forEach((item) =>
        content.push(item))
      console.log(teste)
      this.setState({ links: content });
    })
    console.log(content)
    console.log(this.state)

  }

  render() {
    const { modulos, links, display, deusSouEuDeNovo } = this.state;
    console.log("O componente foi renderizado")

    let post =
      (<div className="article__sec">
        {links.map((item) => (
          <Article
            aboutLink={item.texto}
            tag={item.tag}
            link={item.link}
          />
        ))}
      </div>)

    return (
      <div className="section__cards" >
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          {modulos.map(({ id, numero, nome, materias }) => (
            <>
              <Card
                key={id}
                number={numero}
                nomeModulo={nome}
                onClick={() => this.onClick(materias, id)} />
              {(display && deusSouEuDeNovo == id) && post}
            </>
          ))}        
        </div>
      </div>
    )
  }
}


export default CardsSection