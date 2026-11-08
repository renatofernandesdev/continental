import Dropdown from 'react-bootstrap/Dropdown';
import LOGOHOTEL from "../img/logohotel.jpg"
import LOGIN from "../img/login.png"
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (


    //LOGO DO HOTEL
    <nav className="navbar navbar-expand-lg bg-body-tertiary header" style={{backgroundColor: 'red'}} data-bs-theme="dark">
      <div className="container col-3 col-xs-4 d-none d-lg-block">
        <a href="/"><img className="logohotel" src={LOGOHOTEL} alt="Logo do Hotel" /></a>
      </div>
    
    {/* Logo Recursividade */}
      <div className="container col-8 col-xs-4 d-md-none">
        <a href="/"><img className="logohotel" src={LOGOHOTEL} alt="Logo do Hotel" /></a>
      </div>


            {/* Menu Responsivo */}

            <div class="menuresponsivo" className="ms-auto d-md-none">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav id="dropdown-menu" className="d-md-none bordermenu" class="menuresponsivo bordermenu">

                    <Nav.Link href="/">Home</Nav.Link>

                      <Dropdown>
                        <Dropdown.Toggle as={Nav.Link}>Ofertas</Dropdown.Toggle>
                        <Dropdown.Menu className="menuresponsivo2">
                          <Dropdown.Item href="/QuartoSolteiro">Quarto Solteiro</Dropdown.Item>
                          <Dropdown.Item href="/SuiteClassic">Suíte Classic</Dropdown.Item>
                          <Dropdown.Item href="/SuiteContinental">Suíte Continental</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    <br/>

                      <Dropdown>
                        <Dropdown.Toggle as={Nav.Link}>Quartos e Suítes</Dropdown.Toggle>
                        <Dropdown.Menu className="menuresponsivo2">
                          <Dropdown.Item href="/QuartoSolteiro">Quarto Solteiro</Dropdown.Item>
                          <Dropdown.Item href="/SuiteClassic">Suíte Classic</Dropdown.Item>
                          <Dropdown.Item href="/SuiteContinental">Suíte Continental</Dropdown.Item>
                          <Dropdown.Item href="/SuiteExecutiva">Suíte Executiva</Dropdown.Item>
                          <Dropdown.Item href="/SuiteProfissional">Suíte Profissional</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    <br/>
                    
                    <Dropdown>
                      <Dropdown.Toggle as={Nav.Link}>Entretenimento</Dropdown.Toggle>
                      <Dropdown.Menu className="menuresponsivo2">
                        <Dropdown.Item href="/Lounge">Lounge</Dropdown.Item>
                        <Dropdown.Item href="/SalaEsportes">Sala de Esportes</Dropdown.Item>
                        <Dropdown.Item href="/Sauna">Sauna</Dropdown.Item>
                        <Dropdown.Item href="/Cassino">Cassino</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <br/>
                    
                    <Dropdown>
                      <Dropdown.Toggle as={Nav.Link}>Institucional</Dropdown.Toggle>
                      <Dropdown.Menu className="menuresponsivo2">
                        <Dropdown.Item href="/SobreNos">Sobre Nós</Dropdown.Item>
                        <Dropdown.Item href="/TourVirtual">Tour Virtual</Dropdown.Item>
                        <Dropdown.Item href="/Convenio">Convênios e Parcerias</Dropdown.Item>
                        <Dropdown.Item href="/TrabalheConosco">Trabalhe Conosco</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link href="/Contato">Contato</Nav.Link>

                    <Nav.Link href="/Sign">Login</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>

            {/* Fim do menu responsivo */}

      <div className="container d-flex justify-content-start espacoheader">

      <div className="dropdown d-none d-lg-block espaco">
            <Link to="/">
                <a href="/"><button className="btn btn-secondary">Home</button></a>
            </Link>
        </div>

        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Ofertas</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="/QuartoSolteiro">Quarto Solteiro</a>
            <a className="btn" href="/SuiteClassic">Suíte Classic</a>
            <a className="btn" href="/SuiteContinental">Suíte Continental</a>
          </div>
        </div>

        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Quartos e Suítes</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="/QuartoSolteiro">Quarto Solteiro</a>
            <a className="btn" href="/SuiteClassic">Suíte Classic</a>
            <a className="btn" href="/SuiteContinental">Suíte Continental</a>
            <a className="btn" href="/SuiteExecutiva">Suíte Executiva</a>
            <a className="btn" href="/SuiteProfissional">Suíte Profissional</a>
          </div>
        </div>
        
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Entretenimento</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="/Lounge">Lounge</a>
            <a className="btn" href="/SalaEsportes">Sala de Esportes</a>
            <a className="btn" href="/Sauna">Sauna</a>
            <a className="btn" href="/Cassino">Cassino</a>
          </div>
        </div>
        
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Institucional</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="/SobreNos">Sobre nós</a>
            <a className="btn" href="/TourVirtual">Tour Virtual</a>
            <a className="btn" href="/Convenio">Convênios e Parcerias</a>
            <a className="btn" href="/TrabalheConosco">Trabalhe Conosco</a>
          </div>
        </div>

        <div className="dropdown d-none d-lg-block">
            <Link to="/Contato">
                <a href="/Contato"><button className="btn btn-secondary">Contato</button></a>
            </Link>
        </div>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <a href="/Sign">
            <img class="login" alt="Login" src={LOGIN} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;