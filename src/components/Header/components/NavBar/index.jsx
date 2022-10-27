// create navbar component
import React from "react";
import "./styles.css";

const NavBar = () => (
  <div className="navbar">
    <div className="sitenav">
      <a href="/">Início</a>
      <a href="/sobre">Sobre Nós</a>
      <a href="/adote">Adote</a>
      <a href="/cadastro">Quero Cadastrar</a>
      <a href="/ajudar">Quero Ajudar</a>
      <a href="/apadrinhe">Apadrinhe</a>
      <a href="/mais">Mais</a>
      <a href="/contato">Contato</a>
    </div>

    <div class="searchbar">
      <form
        role="search"
        method="get"
        class="search-form"
        action="https://gaarcampinas.org/"
      >
        <label>
          <input
            type="search"
            class="search-field"
            placeholder="Search..."
            value=""
            name="s"
          />
        </label>
        <input type="submit" class="search-submit" value="" />
      </form>
    </div>
  </div>
);

export default NavBar;
