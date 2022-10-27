import React from "react";
import Slider from "react-slick";
import "./styles.css";

const MainBanner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="main-banner">
      <Slider {...settings}>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2022/08/Carrossel-site-1.png"
            alt="banner"
          />
          <div id="slidecaption1" class="nivo-html-caption">
            <a class="button" href="https://gaarcampinas.org/bingo-2022">
              SAIBA MAIS{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/07/slider2.png"
            alt="Saiba mais"
            title="#slidecaption2"
          />
          <div id="slidecaption2" class="nivo-html-caption">
            <a href="https://gaarcampinas.org/seja-um-lar-temporario/">
              <h2>SEJA UM LAR TEMPORÁRIO</h2>
            </a>

            <p>
              Oferecer lar temporário significa cuidar de um ou mais animais
              recebendo-os em casa, até que eles sejam adotados. O GAAR fornece
              todo o suporte.
            </p>

            <a
              class="button"
              href="https://gaarcampinas.org/seja-um-lar-temporario/"
            >
              Saiba mais{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/Untitled-design-8.png"
            alt="Saiba mais"
            title="#slidecaption3"
          />
          <div id="slidecaption3" class="nivo-html-caption">
            <a href="#">
              <h2>SEJA UM ASSOCIADO</h2>
            </a>

            <p>
              Gostaria de nos ajudar com as despesas dos nossos animais?
              Contribua mensalmente e receba o relatório operacional.
            </p>

            <a class="button" href="#">
              Saiba mais{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/Untitled-design-3.png"
            alt="Clique aqui"
            title="#slidecaption4"
          />
          <div id="slidecaption4" class="nivo-html-caption">
            <a href="https://gaarcampinas.org/2020/08/21/saiu-o-resultado-do-concurso-do-calendario-gaar-2021/">
              <h2>APADRINHE</h2>
            </a>

            <p>
              O apadrinhamento é um ato de amor que ajuda a manter uma vida
              enquanto o animal espera por sua família definitiva.{" "}
            </p>

            <a
              class="button"
              href="https://gaarcampinas.org/2020/08/21/saiu-o-resultado-do-concurso-do-calendario-gaar-2021/"
            >
              Clique aqui{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/08/Copy-of-Untitled-1.png"
            alt="Compre online"
            title="#slidecaption5"
          />
          <div id="slidecaption5" class="nivo-html-caption">
            <a href="www.doglivery.com.br/gaar">
              <h2>DOE RAÇÃO</h2>
            </a>

            <p>Nos ajude a alimentar os animais</p>

            <a class="button" href="www.doglivery.com.br/gaar">
              Compre online{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/site-5.png"
            alt="Acesse aqui"
            title="#slidecaption6"
          />
          <div id="slidecaption6" class="nivo-html-caption">
            <a href="https://gaarcampinas.lojaintegrada.com.br/">
              <h2>LOJINHA</h2>
            </a>

            <p>Produtos especiais e personalizáveis com a marca da ONG.</p>

            <a class="button" href="https://gaarcampinas.lojaintegrada.com.br/">
              Acesse aqui{" "}
            </a>
          </div>
        </div>
        <div className="main-banner-slide">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/Untitled-design-4.png"
            alt="QUERO ADOTAR"
            title="#slidecaption7"
          />
          <div id="slidecaption7" class="nivo-html-caption">
            <a href="">
              <h2>Saiba mais</h2>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default MainBanner;
