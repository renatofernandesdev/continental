import React, { useEffect } from "react";

function Erro404() {
  useEffect(() => {
    alert("Página não encontrada, você será redirecionado para o Hotel Continental.");
    window.location.href = "/";
  }, []);

  return (
    <>
      <div className="border border-5 border-info home_border">
        <h1>ERRO 404: PÁGINA NÃO ENCONTRADA</h1>
      </div>
    </>
  );
}

export default Erro404;
