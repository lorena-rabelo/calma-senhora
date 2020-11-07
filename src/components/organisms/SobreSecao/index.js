import React from "react";
import TituloSecao from "../../atoms/TituloSecao";
import "./styles.css";

const SobreSecao = () => {
  return (
    <section className="sobreSecao" id="sobre">
      <div className="sobreSecao__container">
        <TituloSecao texto="Sobre" />
        <p>
          Conseguir uma vaga em cursos gratuitos de programação está cada vez
          mais difícil. A grande busca por pessoas programadoras pelas empresas
          somando com salários iniciais atrativos, levou ao aumento da procura
          por
          <a href="https://boot4free.org/" className="sobre-link">
            bootcamps gratuitos
          </a>
          .
        </p>
        <p>
          Esse projeto consiste em uma plataforma com materiais de estudo,
          seguindo o roteiro da trilha de front-end da
          <a className="sobre-link" href="https://reprograma.com.br/">
            Reprograma
          </a>
          , para que alunas do curso consigam um material de apoio direto,
          através de vídeos e artigos, e também pessoas que não tenham passado
          no processo seletivo (ou não poderiam fazê-lo) tenham acesso ao
          conteúdo, priorizando textos e vídeos em português.
        </p>
      </div>
    </section>
  );
};

export default SobreSecao;
