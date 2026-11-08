import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './pages/UsuarioContexto';
import './pages/UsuarioContexto';
import BootstrapCSS from './resources/bootstrap/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import './resources/App.css';
import ERRO404 from "./pages/Erro404";
import HOME from "./pages/Home";
import LOUNGE from "./pages/Lounge";
import CONTATO from './pages/Contato';
import CONVENIO from './pages/Convenio';
import SOBRENOS from './pages/SobreNos';
import TOURVIRTUAL from './pages/TourVirtual';
import TRABALHECONOSCO from './pages/TrabalheConosco';
import QUARTOSOLTEIRO from './pages/QuartoSolteiro';
import SALAESPORTES from './pages/SalaEsportes';
import SAUNA from './pages/Sauna';
import CASSINO from './pages/Cassino';
import SUITECLASSIC from './pages/SuiteClassic';
import SUITECONTINENTAL from './pages/SuiteContinental';
import SUITEEXECUTIVA from './pages/SuiteExecutiva';
import SUITEPROFISSIONAL from './pages/SuiteProfissional';
import CADASTRARUSUARIO from './pages/CadastrarUsuario';
import ADMINISTRACAO from './pages/Administracao';
import LOGIN from './pages/Login';
import PRINCIPAL from './pages/Principal';
import SIGN from './pages/Sign';
import PAGINACLIENTE from './pages/PaginaCliente';


function App() {
  const [usuario] = useState("Administrador");
  return (
    <>
      <link href={BootstrapCSS} rel="stylesheet"/>
      <div>
      <UserContext.Provider value={{usuario}}>
        <div>
          <Header />
          <Switch>
          
          {/* Rotas: */}
          <Route path='/' component={HOME} exact />
          <Route path='/QuartoSolteiro' component={QUARTOSOLTEIRO} />
          <Route path='/SuiteClassic' component={SUITECLASSIC} />
          <Route path='/SuiteContinental' component={SUITECONTINENTAL} />
          <Route path='/SuiteExecutiva' component={SUITEEXECUTIVA} />
          <Route path='/SuiteProfissional' component={SUITEPROFISSIONAL} />
          <Route path='/SobreNos' component={SOBRENOS} />
          <Route path='/Lounge' component={LOUNGE} />
          <Route path='/Convenio' component={CONVENIO} />
          <Route path='/TrabalheConosco' component={TRABALHECONOSCO} />
          <Route path='/TourVirtual' component={TOURVIRTUAL} />
          <Route path='/SalaEsportes' component={SALAESPORTES} />
          <Route path='/Sauna' component={SAUNA} />
          <Route path='/Cassino' component={CASSINO} />
          <Route path='/CadastrarUsuario' component={CADASTRARUSUARIO} />
          <Route path='/Administracao' component={ADMINISTRACAO} />
          <Route path='/Login' component={LOGIN} />
          <Route path='/Principal' component={PRINCIPAL} />
          <Route path='/Sign' component={SIGN} />
          <Route path='/PaginaCliente' component={PAGINACLIENTE} />


          {/* Rota CONTATO com PROPS !! */}
          <Route path='/Contato' render={(routeProps) => (
            <CONTATO
              {...routeProps}
              instagram='instagram.com/hotelcontinental'
              whatsapp='(32) 666-999'
              email='continental@jhonwick.com'
              twitter='twitter.com/hotelcontinental'
            />
          )} />

          {/* Fim das Rotas !! */}
          

          {/* Parte do Erro 404 */}
          <Route path="/Erro404" component={ERRO404} />
          <Redirect to="/Erro404" />
          {/* Fim da parte do Erro 404 */}

          </Switch>
        </div>
        <div className="col-lg-12">
          <Footer/>
        </div>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
