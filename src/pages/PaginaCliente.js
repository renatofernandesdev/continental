import React, { useState, useEffect } from "react";
import axios from "axios";

// Função da página de cliente
function PaginaCliente() {
  const [reservas, setReservas] = useState([]);
  const cpf = localStorage.getItem('cpf'); // Recupera o cpf do usuário de localStorage
  const username = localStorage.getItem('username'); // Recupera o login do usuário de localStorage

  useEffect(() => {
    getReservas();
  }, []);

  const getReservas = async () => {
    try {
      const response = await axios.get("http://hotelcontinental.ddns.net:8090/reserva");
      const reservasFiltradas = response.data.filter(reserva => reserva.cpf === cpf);
      setReservas(reservasFiltradas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <br />
      <h1>{`Usuário logado: ${username}`}</h1>
      <br /><br />
      <h1>Lista de Reservas:</h1>
      <br /><br />
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
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br />
    </div>
  );
}

export default PaginaCliente;
