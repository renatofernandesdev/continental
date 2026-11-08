import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/locais/continental/continental1.jpg';
import IMG2 from '../img/locais/continental/continental2.jpg';
import IMG3 from '../img/locais/continental/continental3.jpg';
import IMG4 from '../img/locais/continental/continental4.jpg';

function SuiteContinental() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Detectar data atual
  const currentDate = new Date();
  const dia = currentDate.getDate().toString().padStart(2, '0');
  const mes = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const ano = currentDate.getFullYear().toString();

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeCPF = (event) => {
    setCpf(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeTelefone = (event) => {
    setTelefone(event.target.value);
  };

  const handleClick = () => {
    //"mensagem" armazenada no campo input
    setUpdatedNome(nome);
    setUpdatedCpf(cpf);
    setUpdatedEmail(email);
    setUpdatedTelefone(telefone);

    const reserva = {
      nome,
      cpf,
      email,
      telefone,
      quarto: 'Suite Continental',
      diarias: contagem,
      valor: diaria,
      data: `${dia}/${mes}/${ano}`,
    };

    adicionarReserva(reserva);
  };        

  const adicionarReserva = async (reserva) => {
    try {
      await axios.post('http://hotelcontinental.ddns.net:8090/reserva', reserva);
      alert('Reserva adicionada!');
    } catch (error) {
      console.log(error);
    }
  };

//Botao Reservar
const [updatedNome, setUpdatedNome] = useState(nome)
const [updatedCpf, setUpdatedCpf] = useState(cpf)
const [updatedEmail, setUpdatedEmail] = useState(email)
const [updatedTelefone, setUpdatedTelefone] = useState(telefone)

//Calculo da diaria
const [contagem, setContagem] = useState(1);
const [diaria, setDiaria] = useState(() => calculaDiaria(contagem));

function calculaDiaria(n) {
  var valor = 200;
  return 100 + n * valor;
}

//Manipular contagem de quartos
const aumentarDiaria = () => {
  var n=contagem
  if (contagem !== 30) {
    n=n+1;
  }
  setContagem(n);
  setDiaria(calculaDiaria(n));
};

const diminuirDiaria = () => {
  var n=contagem
  if (contagem !==1 ) {
    n=n-1;
  }
  setContagem(n);
  setDiaria(calculaDiaria(n));
};

  return (
    <>
      <div className="border border-5 border-info home_border">
        
          <Carousel fade className="css-carrousel mb-3">
            
            <Carousel.Item>
              <a href="/">
                <img className="d-block w-100" src={IMG1} alt="Primeiro slide"/>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href="/">
                <img className="d-block w-100" src={IMG2} alt="Segundo slide"/>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href="/">
                <img className="d-block w-100" src={IMG3} alt="Terceiro slide"/>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href="/">
                <img className="d-block w-100" src={IMG4} alt="Quarto slide"/>
              </a>
            </Carousel.Item>

          </Carousel>

          <div className='container'>
          <div className='col mb-3'>
            <h2>Hotel Continental: Suíte Continental.</h2>
            <p>
                Bem-vindo ao lendário Hotel Continental e à exclusiva Suíte Continental.
                Aqui, mergulhe em um mundo de luxo discreto e elegância refinada.
                Com uma vista panorâmica da cidade, esta suíte oferece um refúgio tranquilo, onde você pode desfrutar de uma sala de estar espaçosa e decorada com mobiliário sofisticado.
                Relaxe no quarto requintado, desfrute de serviços personalizados e viva a experiência única de se hospedar em um local onde as regras dos assassinos são respeitadas e a excelência é garantida.
            </p>
          </div><br/>


            {/* Reservar Recursivo */}

            <div className='row-md-2 d-flex justify-content-between d-lg-none textodiaria'>
              <h1 className="form-label col textodiaria">Diária: {contagem}</h1>
              <h1 className="form-label col text-right textodiaria">Valor: R${diaria.toFixed(2)}</h1>
            </div>


            <div className='row d-lg-none'>
              <button onClick={aumentarDiaria} type="button" className="btn btn1 form-control col">Aumentar Diária</button>
              <button onClick={diminuirDiaria} type="button" className="btn btn1 form-control col">Remover Diária</button>
            </div>

            <div className='col mb-3 d-none d-lg-block'>
              <div className='row-md-3 d-flex justify-content-between'>
                <h1 className="form-label col textodiariadiaria">Diária: {contagem}</h1>
                <h1 className="form-label col text-right textodiariavalor">Valor: R${diaria.toFixed(2)}</h1>
            </div>

            <div className='row'>
              <button onClick={aumentarDiaria} type="button" className="btn btn1 form-control col">Aumentar Diária</button>
              <button onClick={diminuirDiaria} type="button" className="btn btn1 form-control col">Remover Diária</button>
            </div>
          </div>

          <br/>
          <div className='row d-flex justify-content-between mb-3'>
            <div className="col-md-3 mb-3">
              <div className="mb-3">
                <label for='nome' className='form-label'>Digite seu Nome:</label>
                <input type="text" className="form-control" id="nome" placeholder="Nome e Sobrenome" onChange={handleChangeNome} value={nome}/>
              </div>
              <div className="mb-3">
                <label for='cpf' className='form-label'>Digite seu CPF:</label>
                <input type="text" className="form-control" id="cpf" placeholder="***.***.***-**" onChange={handleChangeCPF} value={cpf}/>
              </div>
              <div className="mb-3">
                <label for='rg' className='form-label'>Digite seu Email:</label>
                <input type="text" className="form-control" id="email" placeholder="Insira seu email" onChange={handleChangeEmail} value={email}/>
              </div>
              <div className="mb-3">
                <label for='rg' className='form-label'>Digite seu Telefone:</label>
                <input type="text" className="form-control" id="telefone" placeholder="Insira seu telefone/celular" onChange={handleChangeTelefone} value={telefone}/>
              </div>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-evenly mb-3 border rounded">
              <label>Construção do Formulário</label>
              <label>Nome: {nome}</label>
              <label>CPF: {cpf}</label>
              <label>Email: {email}</label>
              <label>Telefone: {telefone}</label>
              <label>Diárias: R${diaria}</label>
            </div>

            {/* Mostra Nome,CPF,RG e Diaria */}
            <div className="col-md-3 card mb-3">
              <div className="card-header">
                Cadastro da reserva
              </div>
              <div className='col d-flex flex-column justify-content-around'>
                <label className="list-group-item">Nome: {updatedNome}</label>
                <label className="list-group-item">CPF: {updatedCpf}</label>
                <label className="list-group-item">Email: {updatedEmail}</label>
                <label className="list-group-item">Telefone: {updatedTelefone}</label>
                <label className="list-group-item">Diárias: R${diaria}</label>
              </div>
            </div>
              
          </div>

            {/* Reservar Recursivo */}
            <div>
                <center>
                <a href="/"><button onClick={handleClick} type="button" className="row btn btn-success reservar container col-8 col-xs-4 d-md-none">Reservar</button></a>
                </center>
            </div>


            <div className="row d-none d-lg-block">
              <center>
              <button onClick={handleClick} type="button" className="btn btn-success reservar">Reservar</button>
              </center>
            </div>
        </div>
      </div>
    </>
  );
}

export default SuiteContinental;