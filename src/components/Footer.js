import React from "react"
import LOGOFOOTER from '../img/logofooter.jpg'
import MAIL from '../img/mail.png'
import FACEBOOK from '../img/facebook.svg'
import INSTAGRAM from '../img/instagram.svg'
import TWITTER from '../img/twitter.svg'


function Footer() {
    return (
        <div className='container my-4'>
            <div className="row align-items-center justify-content-evenly">
                <div className='col-md-3 column'>
                    <div className="d-flex justify-content-center">
                        <img alt="Logo Continental" src={LOGOFOOTER} className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center my-2">
                        <a href="mailto://continental@jhonwick.com">
                            <img alt="E-mail" src={MAIL}/>
                        </a>
                        <a href="http://www.facebook.com/hotelcontinental">
                            <img alt="Facebook" src={FACEBOOK}/>
                        </a>
                        <a href="https://www.instagram.com/hotelcontinental/">
                            <img alt="Instagram" src={INSTAGRAM}/>
                        </a>
                        <a href="https://twitter.com/hotelcontinental">
                            <img alt="Twitter" src={TWITTER}/>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 d-flex flex-column align-items-center my-2">
                    <h4>Institucional</h4>
                    <a alt="" href="/Tour">Tour Virtual</a>
                    <a alt="" href="/Convenio">Convênios e Parcerias</a>
                    <a alt="" href="/TrabalheConosco">Trabalhe Conosco</a>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center my-2">
                    <h4>Termos legais</h4>
                    <a alt="" href="https://pt.wikipedia.org/wiki/Uso">Termos de uso</a>
                    <a alt="" href="https://meta.wikimedia.org/wiki/Privacy_policy">Política e privacidade</a>
                    <a alt="" href="https://pt.wikipedia.org/wiki/Acessibilidade_web">Acessibilidade WEB</a>
                    <a alt="" href="https://pt.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)">Politica de Cookies</a>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center my-2">
                    <h4>Sobre Nós</h4>
                    <a alt="" href="/SobreNos">Sobre nós</a>
                    <a alt="" href="https://www.globo.com/">Notícias</a>
                    <a alt="" href="/Contato">Contato</a>
                </div>
            </div>
        </div>
    );
}

export default Footer