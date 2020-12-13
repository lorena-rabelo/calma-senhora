import React from "react";
import "./styles.css";
import Loop from "../../../assets/loop.png";
import Twitter from "../../../assets/logo_twitter.png";
import Github from "../../../assets/logo_github.png";
import Mail from "../../../assets/mail.png";

const ColaboreSecao = () => {
  return (
    <section className="ColaboreSecao" id="colabore">
      <div className="colabore__container">
        <div>
          <h2>Quer acrescentar algum conteúdo?</h2>
          <h2>Entre em contato</h2>
          <img
            className="colabore--loop"
            alt="seta indicando os links de contato"
            src={Loop}></img>
        </div>
        <div className="colabore__container--arrow-redes">
          <ul>
            <li>
              <a href="mailto:ola.lorenarabelo@gmail.com">
                <img
                  src={Mail}
                  alt="ícone e-mail"
                  className="colabores--icones"></img>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/hi____lorena">
                <img
                  src={Twitter}
                  alt="ícone twitter"
                  className="colabores--icones"></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/lorena-rabelo/calma-senhora">
                <img
                  src={Github}
                  alt="ícone github"
                  className="colabores--icones github"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ColaboreSecao;
