import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
      localStorage.setItem('cpf', cpf); // Armazena o CPF do usuário em localStorage
      localStorage.setItem('username', username); // Armazena o CPF do usuário em localStorage

    // Realiza a requisição para verificar o login, senha e CPF usando o json-server
    const response = await fetch('http://hotelcontinental.ddns.net:8090/usuario');
    const data = await response.json();

    const user = data.find((usuario) => usuario.login === username && usuario.senha === password && usuario.cpf === cpf);

    if (user) {
      if (user.tipo === 'Administrador') {
        // Login Administrador
        alert('Login realizado como Administrador. Redirecionando.');
        history.push('/Administracao');
      } else if (user.tipo === 'Cliente') {
        // Login Cliente
        alert('Login realizado como Cliente. Redirecionando.');
        window.location.href = '/PaginaCliente';
      } else {
        // Tipo de usuário desconhecido
        alert('Tipo de usuário desconhecido');
      }
    } else {
      // Login inválido
      alert('Login/Senha/CPF incorretos');
    }
  };

  return (
    <div className="container mt-5 col-xs-3 col-xl-3">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="border rounded p-4">
        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuário:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">CPF:</label>
          <input
            type="text"
            id="cpf"
            className="form-control"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>

        <center><button onClick={handleLogin} type="submit" className="btn btn-primary col-6">Entrar</button></center>
      </form>
    </div>
  );
};

export default Login;
