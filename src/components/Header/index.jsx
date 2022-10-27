import React from "react";
import NavBar from "./components/NavBar";
import "./styles.css";

const Header = () => (
  <header className="header">
    <div className="inner-header">
      <div className="logo">
        <a href="/">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/07/15232223_1159241627503837_3935744301048655086_n.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="header-right">
        <a href="https://gaarcampinas.lojaintegrada.com.br/" target="_blank">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/icon-shopping.png"
            width="25"
            height="25"
            alt="lojinha"
          />{" "}
          Lojinha
        </a>
        <a href="mailto:contato@gaarcampinas.org">
          <img
            src="https://gaarcampinas.org/wp-content/uploads/2020/10/icon-mail.png"
            width="25"
            height="25"
            alt="Contato"
          />{" "}
          Contato
        </a>
      </div>

      <NavBar />
    </div>
  </header>
);

export default Header;
