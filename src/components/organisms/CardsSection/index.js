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

  onClick = async (materias, nome) => {
    console.log("clicou", materias, nome)
    await this.setState({ materias: materias });
    console.log(materias)
    this.getMaterial()
  }

  getMaterial = async () => {

    const { materias, links } = this.state;
    console.log('chamou getMaterial');
    // materias.forEach 
    materias.map((item) =>    
    this.setState({ links : links.concat(item.artigos) }))
    console.log(this.state);
  }
  // this.setState(state => {
  //   const list = state.list.concat(state.value);

  //   return {
  //     list,
  //     value: '',




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
              onClick={() => this.onClick(materias, nome)} />
          ))}
          <div className="article__sec">
            {materias.map((item) => (

              <Article
                aboutLink={item.artigos}
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