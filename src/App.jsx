import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

import Button from "./components/Button/Button";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel.jsx";

import LogoHome from "./assets/logos/logo branca2.png";

import IconeBateria from "./assets/icones/batery.png";
import IconeAmpulheta from "./assets/icones/ampulheta.png";
import IconeDeslike from "./assets/icones/deslike.png";
import Iconegrafico from "./assets/icones/grafico.png";
import Iconebalanca from "./assets/icones/balanca.png";
import IconeEmpresarios from "./assets/icones/empresarios.png";
import IconeProfissionais from "./assets/icones/profissionais.png";
import IconePessoas from "./assets/icones/pessoas.png";
import IconeCerebro from "./assets/icones/cerebro.png";
import IconeEngrenagem from "./assets/icones/engrenagem.png";
import IconeTempo from "./assets/icones/tempo.png";
import IconeCoracao from "./assets/icones/coracao.png";
import IconePessoaEngrenagem from "./assets/icones/pessoaengrenagem.png";
import IconeAlvo from "./assets/icones/alvo.png";
import IconceLink from "./assets/icones/link-solid-full.svg";
import IconeConfirmacao from "./assets/icones/confirmacao.svg";

import ImagemOqueE from "./assets/arts/bloco - o que é a comunidade de alta performance integral.png";
import ImagemParaQuem from "./assets/arts/bloco  - pra quem é essa comunidade 1.png";
import ImagemOqueVoce from "./assets/arts/bloco - o que voce desenvolve ao fazer parte da comunidade.png";
import ImagemOqueVoceEncontra from "./assets/arts/bloco - o que voce encontra dentro da plataforma.png";
import ImagemQuemEsta from "./assets/arts/art renan.png";
import ImagemOportunidade from "./assets/arts/xadrez.jpg";
import ImagemProntoPara from "./assets/arts/bloco  - pronto para dar o proximo passo.png";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 120, // evita ativar animações fora da viewport
    });
  }, []);

  return (
    <>
      <section className="Home">
        <div className="infos">
          <img src={LogoHome} alt="Logo" data-aos="fade-right" />

          <div className="tituloHome">
            {/* <TypeAnimation
              sequence={["Comunidade de Alta Performance Integral"]}
              speed={20}
            /> */}

            <h1>Comunidade de Alta Performance Integral</h1>
          </div>

          <h3 data-aos="fade-left">
            Evolua corpo, mente, emoções, produtividade e propósito de forma
            integrada e sustentável.<br></br>
            <br></br>
            Não é um curso para assistir.É um ambiente para se transformar no
            processo.
          </h3>

          <Button Text="QUERO EVOLUIR" data-aos="fade-left" />
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

        <div className="ListaIcones" data-aos="fade-left">
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

            <p>Alterna entre picos de motivação e períodos de estagnação</p>
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
        <div className="imagem" data-aos="fade-left">
          <img src={ImagemOqueE} alt="" />
        </div>
        <div className="infos" data-aos="fade-right">
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
        <div className="infos" data-aos="fade-right">
          <h1>Para quem essa comunidade é?</h1>
          <h3>Essa comunidade é para pessoas que:</h3>
          <p>
            {" "}
            <img src={IconeConfirmacao} alt="" />
            Querem produzir mais, sem sacrificar a saúde mental
          </p>
          <br></br>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Buscam disciplina, foco e constância, sem viver sob pressão
          </p>
          <br></br>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Entendem que resultado começa pelo corpo e pela mente
          </p>
          <br></br>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Já tentaram várias abordagens, mas sentem falta de estrutura e
            direção
          </p>
          <br></br>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Querem crescer profissionalmente sem perder a vida pessoal
          </p>
          <br></br>

          <p>
            {" "}
            <img src={IconeConfirmacao} alt="" />
            Acreditam que evolução real envolve consciência, identidade e
            propósito
          </p>
          <br></br>

          <Button Text="EU QUERO AGORA" />
        </div>

        <div className="imagem" data-aos="fade-left">
          <img src={ImagemParaQuem} alt="" />
        </div>
      </section>

      <section className="Especialmente">
        <div className="texto">
          <h1>Especialmente indicada para</h1>
        </div>

        <div className="ListaIcones" data-aos="fade-right">
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
        <div className="imagem" data-aos="fade-left">
          <img src={ImagemOqueVoce} alt="" />
        </div>
        <div className="infos" data-aos="fade-right">
          <h1>O que você desenvolve ao fazer parte da comunidade</h1>
          <h3>Ao longo do processo, você começa a perceber mudanças claras:</h3>

          <p>Mais clareza mental e foco no que realmente importa</p>
          <p>Melhor gestão do tempo e da energia</p>
          <p>Disciplina construída de dentro para fora</p>
          <p>Mais estabilidade emocional nas decisões</p>
          <p>Organização da vida pessoal e profissional</p>
          <p>Evolução física e mental alinhadas</p>
          <p>Sensação real de direção, identidade e propósito</p>

          <h3 className="AoLongo">
            O resultado não é apenas fazer mais.<br></br>É viver melhor enquanto
            cresce.
          </h3>
          <Button Text="QUERO FAZER PARTE" />
        </div>
      </section>

      <section className="OqueVoceEncontra">
        <div className="infos" data-aos="fade-left">
          <h1>O que você encontra dentro da plataforma</h1>
          <h3>Ao entrar na comunidade, você tem acesso a:</h3>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Aulas organizadas por pilares
          </p>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Conteúdos práticos e aplicáveis
          </p>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Entendem que resultado começa pelo corpo e pela mente
          </p>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Exercícios e métodos de aplicação
          </p>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Atualizações constantes
          </p>

          <p>
            <img src={IconeConfirmacao} alt="" />
            Um ambiente pensado para uso contínuo
          </p>

          <Button Text="EU QUERO" />
        </div>

        <div className="imagem" data-aos="fade-right">
          <img src={ImagemOqueVoceEncontra} alt="" />
        </div>
      </section>

      <section className="OsTemas">
        <div className="texto">
          <h1>Os temas abordados incluem:</h1>
        </div>

        <div className="ListaIcones" data-aos="fade-right">
          <div className="icone1">
            <div className="circulo">
              <img src={IconeCerebro} alt="" id="IconeCerebro" />
            </div>
            <p>
              Mentalidade e<br></br>hábitos
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeEngrenagem} alt="" />
            </div>

            <p>
              Disciplina e<br></br>autogoverno
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeTempo} alt="" id="IconeTempo" />
            </div>

            <p>
              Produtividade e<br></br>gestão do tempo
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeCoracao} alt="" id="IconeCoracao" />
            </div>

            <p>
              Saúde física, mental<br></br>e emocional
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img
                src={IconePessoaEngrenagem}
                alt=""
                id="IconePessoaEngrenagem"
              />
            </div>
            <p>
              Performance<br></br>cognitiva
            </p>
          </div>

          <div className="icone1">
            <div className="circulo">
              <img src={IconeAlvo} alt="" id="IconeAlvo" />
            </div>
            <p>
              Propósito e<br></br>consciência
            </p>
          </div>
        </div>

        <Button Text="COMECE AGORA" />
      </section>

      <section className="QuemEsta">
        <div className="infos" data-aos="fade-left">
          <h1>Quem está por trás da comunidade?</h1>
          <h3>Renan Vieira é Mentor de Performance Física e Mental.</h3>

          <p>
            Há mais de 10 anos, ajuda pessoas a alcançarem resultados reais
            unindo ciência, prática, disciplina e consciência.<br></br>
            <br></br>
            Após sobreviver a uma experiência extrema de quase morte,
            transformou seu processo de reconstrução física, mental e espiritual
            em método.<br></br>
            <br></br>
            Além de mentor, é atleta profissional de fisiculturismo e
            empresário. Ele vive na prática aquilo que ensina. Aqui, você
            aprende com alguém que fala de vivência, não só teoria.
          </p>

          <Button Text="ACESSAR PLATAFORMA" />
        </div>

        <div className="imagem" data-aos="fade-right">
          <img src={ImagemQuemEsta} alt="" />
        </div>
      </section>

      <VideoCarousel />

      <section className="OportunidadeExc">
        <div className="imagem" data-aos="fade-right">
          <img src={ImagemOportunidade} alt="" />
        </div>

        <div className="infos" data-aos="fade-left">
          <h1>Oportunidade exclusiva</h1>
          <div className="QuadradoPreco">
            <p>Acesso completo à plataforma</p>
            <div className="linha"></div>

            <p>Conteúdos organizados por pilares</p>
            <div className="linha"></div>

            <p>
              Métodos práticos de disciplina<br></br>e produtividade
            </p>
            <div className="linha"></div>

            <p>Atualizações constantes</p>
            <div className="linha"></div>

            <p>
              Ambiente contínuo<br></br>de desenvolvimento
            </p>
            <div className="linha"></div>

            <h3>
              de <span>R$ 997,00</span> por
            </h3>
            <h2>
              <span>12x </span>R$ 35,90
            </h2>
            <h4>ou R$ 347,00 à vista</h4>

            <Button Text="QUERO FAZER PARTE" />
          </div>
        </div>
      </section>

      <section className="ProntoPara">
        <div className="infos" data-aos="fade-left">
          <h1>Pronto para dar o próximo passo?</h1>
          <h3>
            Se você sente que é hora de parar de tentar sozinho e começar a
            evoluir com clareza, estrutura e propósito.
            <br></br>
            <br></br>
            <span>Finalize sua inscrição na plataforma oficial.</span>
            <br></br>
            <br></br>A transformação começa com uma decisão.
          </h3>

          <Button Text="DAR O PRÓXIMO PASSO" />
        </div>

        <div className="imagem" data-aos="fade-right">
          <img src={ImagemProntoPara} alt="" />
        </div>
      </section>

      <footer>
        <h3>© 2026 Renan Vieira | todos os direitos reservados</h3>

        <p>
          desenvolvido por{" "}
          <a
            href="https://www.instagram.com/andyxdev_/"
            className="externalLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            @andyxdev
          </a>{" "}
          <img src={IconceLink} alt="" />
        </p>
      </footer>
    </>
  );
};

export default App;
