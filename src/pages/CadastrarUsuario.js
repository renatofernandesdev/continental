import React, { useState } from "react";
import axios from "axios";

function CadastrarUsuario() {
  const [formData, setFormData] = useState({
    login: "",
    senha: "",
    tipo: "Cliente",
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const cadastrarUsuario = async () => {
    try {
      await axios.post("http://hotelcontinental.ddns.net:8090/usuario", formData);
      alert("Cadastro realizado com sucesso!!");
      setFormData({
        login: "",
        senha: "",
        tipo: "Cliente",
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
      });
    } catch (error) {
      alert("Não foi possível realizar a reserva.");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 col-xs-3 col-xl-3 border rounded p-4">
      <center><h1>Cadastro de Usuário</h1></center>

      <div className="mb-3">
        <label htmlFor="login" className="form-label">Login:</label>
        <input
          type="text"
          id="login"
          className="form-control"
          value={formData.login}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              login: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="senha" className="form-label">Senha:</label>
        <input
          type="password"
          id="senha"
          className="form-control"
          value={formData.senha}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              senha: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome e Sobrenome:</label>
        <input
          type="text"
          id="nome"
          className="form-control"
          value={formData.nome}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              nome: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpf" className="form-label">CPF:</label>
        <input
          type="text"
          id="cpf"
          className="form-control"
          value={formData.cpf}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              cpf: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={formData.email}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefone" className="form-label">Telefone:</label>
        <input
          type="text"
          id="telefone"
          className="form-control"
          value={formData.telefone}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              telefone: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <center><button onClick={cadastrarUsuario} className="btn btn-primary col-7">Cadastrar</button></center>
      </div>
    </div>
  );
}

export default CadastrarUsuario;
