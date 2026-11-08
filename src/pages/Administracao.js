import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from './UsuarioContexto';

//Funções da listagem das reservas
function ListagemReservas() {
  const {usuario} = useContext(UserContext)
  const [reservas, setReservas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getReservas();
  }, []);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getReservas = async () => {
    try {
      const response = await axios.get("http://hotelcontinental.ddns.net:8090/reserva");
      setReservas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsuarios = async () => {
    try {
      const response = await axios.get("http://hotelcontinental.ddns.net:8090/usuario");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletarReserva = async (id) => {
    try {
      await axios.delete(`http://hotelcontinental.ddns.net:8090/reserva/${id}`);
      alert("Deletado!");
      getReservas();
    } catch (error) {
      console.log(error);
    }
  };

  const deletarUsuarios = async (id) => {
    try {
      await axios.delete(`http://hotelcontinental.ddns.net:8090/usuario/${id}`);
      alert("Deletado!");
      getUsuarios();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <br/><h1>{`Usuário logado: ${usuario}`}</h1><br/><br/>
      <h1>Lista de Reservas:</h1><br/><br/>
      <table className="table table-border-grey table-light" style={{ borderRadius: '10px' }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Quarto</th>
            <th scope="col">Diárias</th>
            <th scope="col">Valor</th>
            <th scope="col">Data</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <th scope="row">{reserva.id}</th>
              <td>{reserva.nome}</td>
              <td>{reserva.cpf}</td>
              <td>{reserva.email}</td>
              <td>{reserva.telefone}</td>
              <td>{reserva.quarto}</td>
              <td>{reserva.diarias}</td>
              <td>{reserva.valor}</td>
              <td>{reserva.data}</td>
              <td>
                <button
                  onClick={() => deletarReserva(reserva.id)}
                  className="btn btn-danger"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table><br/><br/>

      <h1>Lista de Clientes:</h1><br/><br/>
      <table className="table table-border-grey table-light" style={{ borderRadius: '10px' }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Login</th>
            <th scope="col">Senha</th>
            <th scope="col">Tipo</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.login}</td>
              <td>{usuario.senha}</td>
              <td>{usuario.tipo}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.cpf}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
              <td>
                <button
                  onClick={() => deletarUsuarios(usuario.id)}
                  className="btn btn-danger"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table><br/><br/>

    </div>
  );
}

export default ListagemReservas;
