import React from 'react';
import SIGN from '../img/sign.png';

function Sign() {

  return (
    <div className="container">
      <center><img className="container sign" alt="Imagem do Hotel Continental" src={SIGN}/></center><br/>

      <center><a href="/CadastrarUsuario"><button type="submit" className="btn btn-primary col-4 btn-lg">Cadastrar</button></a></center><br/>

      <center><a href="/Login"><button type="submit" className="btn btn-success col-4 btn-lg">Fazer Login</button></a></center><br/>
      <br/><br/><br/><br/>
    </div>
  );
};

export default Sign;
