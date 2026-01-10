import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";

import Button from "./components/Button/Button";

import LogoHome from "./assets/logos/logo branca2.png";

import IconeBateria from "./assets/icones/batery.png";
import IconeAmpulheta from "./assets/icones/ampulheta.png";
import IconeDeslike from "./assets/icones/deslike.png";
import Iconegrafico from "./assets/icones/grafico.png";
import Iconebalanca from "./assets/icones/balanca.png";
import IconeEmpresarios from "./assets/icones/empresarios.png";
import IconeProfissionais from "./assets/icones/profissionais.png";
import IconePessoas from "./assets/icones/pessoas.png";

import ImagemOqueE from "./assets/arts/bloco - o que é a comunidade de alta performance integral.png";
import ImagemParaQuem from "./assets/arts/bloco  - pra quem é essa comunidade 1.png";
import ImagemOqueVoce from "./assets/arts/bloco - o que voce desenvolve ao fazer parte da comunidade.png";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, offset: 120 });
  }, []);

  return (
    <>
      <section className="Home">
        <div className="infos">
          <img src={LogoHome} alt="Logo" />

          <div className="tituloHome">
            <TypeAnimation
              sequence={["Comunidade de alta performance integral"]}
            />
          </div>

          <h3>
            Evolua corpo, mente, emoções, produtividade e propósito de forma
            integrada e sustentável.<br></br>
            <br></br>
            Não é um curso para assistir.É um ambiente para se transformar no
            processo.
          </h3>

          <Button Text="QUERO EVOLUIR" />
        </div>
      </section>

      <section className="Oproblema">
        <div className="texto">
          <h1>
            O problema não é falta de esforço.<br></br>É falta de direção
          </h1>
          <h3>
            Você até tenta se organizar. Começa rotinas,<br></br> muda hábitos,
            busca produtividade.<br></br>
            <br></br>Mas sente que:
          </h3>
        </div>

        <div className="ListaIcones">
          <div className="icone1">
            <div className="circulo">
              <img src={IconeBateria} alt="" id="IconeBateria" />
            </div>
            <p>Vive sempre cansado</p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeAmpulheta} alt="" />
            </div>

            <p>
              Faz muito, mas<br></br>avança pouco
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeDeslike} alt="" id="IconeDeslike" />
            </div>

            <p>
              Perde o foco<br></br>com facilidade
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={Iconegrafico} alt="" id="IconeGrafico" />
            </div>

            <p>
              Alterna entre picos de motivação<br></br>e períodos de estagnação
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={Iconebalanca} alt="" id="IconeBalanca" />
            </div>
            <p>
              Evolui em uma área…<br></br>enquanto outras ficam para trás
            </p>
          </div>
        </div>

        <Button Text="ENTRAR NA COMUNIDADE" />
      </section>

      <section className="OqueE">
        <div className="imagem">
          <img src={ImagemOqueE} alt="" />
        </div>
        <div className="infos">
          <h1>O que é a Comunidade de Alta Performance Integral?</h1>
          <h3>
            A Comunidade de Alta Performance Integral é um ecossistema de
            desenvolvimento contínuo para pessoas que querem evoluir corpo,
            mente, emoções, produtividade e propósito, de forma prática,
            consciente e sustentável.<br></br>
            <br></br>Aqui, tudo é pensado para o curto, médio e longo prazo.
            <br></br>
            <br></br>Você não entra para “maratonar aulas”.<br></br>Você entra
            para viver um processo real de evolução.<br></br>
            <br></br>Com estrutura, clareza e acompanhamento, a comunidade se
            torna um espaço onde o crescimento deixa de ser caótico e passa a
            ser intencional.
          </h3>
          <Button Text="COMECE AGORA" />
        </div>
      </section>

      <section className="ParaQuem">
        <div className="infos">
          <h1>Para quem essa comunidade é?</h1>
          <h3>Essa comunidade é para pessoas que:</h3>
          <p>Querem produzir mais, sem sacrificar a saúde mental</p>
          <br></br>

          <p>Buscam disciplina, foco e constância, sem viver sob pressão</p>
          <br></br>

          <p>Entendem que resultado começa pelo corpo e pela mente</p>
          <br></br>

          <p>
            Já tentaram várias abordagens, mas sentem falta de estrutura e
            direção
          </p>
          <br></br>

          <p>Querem crescer profissionalmente sem perder a vida pessoal</p>
          <br></br>

          <p>
            Acreditam que evolução real envolve consciência, identidade e
            propósito
          </p>
          <br></br>

          <Button Text="EU QUERO AGORA" />
        </div>

        <div className="imagem">
          <img src={ImagemParaQuem} alt="" />
        </div>
      </section>

      <section className="Especialmente">
        <div className="texto">
          <h1>Especialmente indicada para</h1>
        </div>

        <div className="ListaIcones">
          <div className="icone1">
            <div className="circulo">
              <img src={IconeEmpresarios} alt="" id="IconeEmpresarios" />
            </div>
            <p>
              Empresários<br></br>e empreendedores
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeProfissionais} alt="" />
            </div>

            <p>
              Profissionais autônomos<br></br>e liberais
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconePessoas} alt="" id="IconePessoas" />
            </div>

            <p>
              Pessoas comprometidas com execução,<br></br>responsabilidadee
              evolução contínua
            </p>
          </div>
        </div>

        <Button Text="ENTRAR NA COMUNIDADE" />
      </section>

      <section className="OqueVoce">
        <div className="imagem">
          <img src={ImagemOqueVoce} alt="" />
        </div>
        <div className="infos">
          <h1>O que você desenvolve ao fazer parte da comunidade</h1>
          <h3>Ao longo do processo, você começa a perceber mudanças claras:</h3>

          <p>Mais clareza mental e foco no que realmente importa</p>

          <h3>Ao longo do processo, você começa a perceber mudanças claras:</h3>
          <Button Text="COMECE AGORA" />
        </div>
      </section>
    </>
  );
};

export default App;
