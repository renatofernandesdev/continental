import React from 'react';
import IMG1 from '../img/img1.jpg';

function Principal() {
  return (
    <div className="border border-5 border-info home_border">
      <header className="hidden">Seu conteúdo do header aqui</header>

      <div className="border border-5 border-info home_border">
        <a href="/">
          <img className="d-block w-100" src={IMG1} alt="Primeiro slide" />
        </a>

        <center>
          <br />
          <h2>
            Bem-vindo ao Hotel Continental: O refúgio dos conhecedores e oásis de
            exclusividade.
          </h2>
        </center>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Principal;