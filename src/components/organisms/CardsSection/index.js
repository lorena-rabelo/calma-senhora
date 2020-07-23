import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'
import Article from '../../atoms/Article'
import Api from '../../../services/Api'


class CardsSection extends Component {
  constructor() {
    super()
    this.state = {
      modulos: [],
      materias: [],
      links: [],     
      display: false,
      identificacao: ""
    }
  }

  componentDidMount() {    
    this.loadModulos();  
  }

  loadModulos = async () => {
    const response = await Api.get(`/modulos`);
    this.setState({ modulos: response.data });
  };

  onClick = async (materias, id) => {    
    await this.setState({ materias: materias });  
    this.getMaterial()    
    this.setState({ display: true, identificacao : id })
  }

  getMaterial = () => {
    const { materias} = this.state;
    let content = [], teste    
    materias.forEach((item) => {      
      teste = item.artigos
      teste.forEach((item) =>
        content.push(item))     
      this.setState({ links: content });
    })  
  }

  render() {
    const { modulos, links, display, identificacao } = this.state;   

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
              {(display && identificacao === id) && post}
            </>
          ))}        
        </div>
      </div>
    )
  }
}


export default CardsSection