import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/locais/lounge/lounge1.jpg'
import IMG2 from '../img/locais/lounge/lounge2.jpg'
import IMG3 from '../img/locais/lounge/lounge3.jpg'

function Lounge() {

  return (

        <>
<div class="border border-5 border-info home_border">
  
<Carousel fade class="css-carrousel">
        
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

      </Carousel>


        <h1>Hotel Continental: Lounge</h1><br/>

        <p class="p2">Bem-vindo ao Lounge exclusivo do Hotel Continental, um espaço sofisticado e envolvente projetado para proporcionar uma experiência única. Aqui, convidamos você a relaxar, socializar e desfrutar de momentos memoráveis em um ambiente elegante e acolhedor.
        <br/>
O Lounge é o coração pulsante do hotel, onde hóspedes e visitantes se reúnem para desfrutar de uma ampla seleção de bebidas premium e coquetéis artesanais. Nossa equipe de mixologistas talentosos está pronta para criar combinações irresistíveis de sabores, satisfazendo até mesmo os paladares mais exigentes. Seja um clássico da mixologia ou uma criação exclusiva, cada drinque é preparado com cuidado e maestria, garantindo uma experiência de sabor excepcional.
<br/><br/>
Além de uma variedade de bebidas, o Lounge oferece um ambiente aconchegante e convidativo, com assentos confortáveis e uma atmosfera descontraída. É o lugar perfeito para se desconectar do mundo exterior, relaxar e desfrutar de boa música ambiente enquanto aprecia sua bebida favorita.
<br/><br/>
O Lounge do Hotel Continental também serve como um ponto de encontro social, proporcionando uma oportunidade única para conhecer pessoas interessantes e fazer conexões significativas. Nossos hóspedes frequentemente se encontram aqui para compartilhar histórias, ideias e até mesmo fechar negócios. O ambiente discreto e exclusivo do Lounge cria um cenário perfeito para discussões informais e networking.
<br/><br/>
Além disso, para aqueles que desejam uma experiência ainda mais privada, oferecemos áreas exclusivas reservadas para reuniões e negociações importantes. Com a combinação certa de luxo, privacidade e serviços excepcionais, o Lounge do Hotel Continental se torna um local ideal para fechar acordos e realizar negócios em um ambiente exclusivo.
<br/><br/>
Venha se juntar a nós no Lounge do Hotel Continental, onde todas as noites se transformam em momentos inesquecíveis. Permita que nossa equipe experiente cuide de você enquanto você desfruta de uma atmosfera única, bebidas requintadas e conexões significativas. Aqui, o tempo parece parar, e cada visita é uma experiência extraordinária. Bem-vindo ao Lounge do Hotel Continental, o destino perfeito para relaxar, socializar e fechar negócios.
</p>
<br/><br/>

</div>
        </>

  );
}

export default Lounge;