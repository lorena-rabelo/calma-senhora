import React, { Component } from "react";
import Modulo from "../../molecules/Modulo";
import TituloSecao from "../../atoms/TituloSecao";
import "./styles.css";
import Artigo from "../../atoms/Artigo";
import api from "../../../services/api";
import Repositorios from "../../../services/Repositorios";

class ModulosSecao extends Component {
  constructor() {
    super();
    this.state = {
      modulos: [],
      materias: [],
      links: [],
      display: false,
      identificacao: "",
      github: [],
      repositorios: [],
    };
  }

  componentDidMount() {
    this.carregaModulos();
    this.carregaRepositorios();
  }

  carregaModulos = async () => {
    const response = await api.get(`/modulos`);
    this.setState({ modulos: response.data });
  };

  carregaRepositorios = async () => {
    const resposta = await Repositorios.get(`/modulos`);
    this.setState({ github: resposta.data });
  };

  onClick = (materias, id) => {
    this.setState({ materias: materias });
    this.obterMaterias();
    this.obterRepositorios(id);
    this.setState({ display: !this.state.display, identificacao: id });
  };

  obterMaterias = () => {
    const { materias } = this.state;
    let content = [],
      teste;
    materias.forEach((item) => {
      teste = item.artigos;
      teste.forEach((item) => content.push(item));
      this.setState({ links: content });
    });
  };

  obterRepositorios = (id) => {
    const { github } = this.state;
    github.forEach((item) => {
      item.numero === id && this.setState({ repositorios: item.repositorios });
    });
  };

  render() {
    const { modulos, links, display, identificacao, repositorios } = this.state;

    let post = (
      <div className="artigos__secao">
        {links.map((item) => (
          <Artigo sobreLink={item.texto} tag={item.tag} link={item.link} />
        ))}
      </div>
    );

    let reposReprograma = (
      <div className="reposReprograma">
        <h4>Repositórios:</h4>
        <div className="reposReprograma--lista">
          {repositorios.map((item) => (
            <h4 className="reposReprograma--links">
              <a href={item.link}>{item.texto}</a>
            </h4>
          ))}
        </div>
      </div>
    );

    return (
      <div className="modulos__secao" id="roteiro">
        <TituloSecao texto="Roteiro de Estudo" />
        <div className="modulos__secao--container">
          {modulos.map(({ id, numero, nome, materias }) => (
            <>
              <Modulo
                className={`modulo__container ${
                  display && identificacao === id && "active"
                }`}
                key={id}
                numero={numero}
                nomeModulo={nome}
                onClick={() => this.onClick(materias, id)}
              />
              {display && identificacao === id && reposReprograma}
              {display && identificacao === id && post}
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default ModulosSecao;
