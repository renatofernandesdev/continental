import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/locais/cassino/cassino1.jpg'
import IMG2 from '../img/locais/cassino/cassino4.jpg'
import IMG3 from '../img/locais/cassino/cassino3.jpeg'
import IMG4 from '../img/locais/cassino/cassino2.jpeg'

function Cassino() {

  return (

        <>
<div class="border border-5 border-info home_border">
<Carousel fade class="css-carrousel">
        
        <Carousel.Item>
          <a href="/">
            <img className="d-block w-100" src={IMG2} alt="Primeiro slide"/>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/">
            <img className="d-block w-100" src={IMG1} alt="Segundo slide"/>
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


        <br/><h1>Hotel Continental: Cassino</h1><br/><br/>

        <p class="p2">No Hotel Continental, buscamos proporcionar uma experiência completa aos nossos hóspedes, e isso inclui momentos de entretenimento e diversão. Apresentamos orgulhosamente nosso exclusivo Cassino, um destino de classe mundial para aqueles que buscam um pouco de emoção e sorte após um longo dia.
        <br/><br/>
Nosso Cassino é um espaço luxuoso e sofisticado, onde os hóspedes podem se entregar à emoção dos jogos de azar. Oferecemos uma ampla variedade de opções de jogos, desde clássicos como roleta, blackjack e pôquer até máquinas caça-níqueis de última geração. Independentemente de suas preferências de jogo, você encontrará uma experiência envolvente e repleta de emoção em nosso cassino.
<br/><br/>
Nossa equipe de croupiers profissionais está pronta para recebê-lo e fornecer orientação e assistência durante sua visita. Eles são especialistas em seus respectivos jogos e garantem um ambiente justo e seguro para todos os participantes. A atmosfera animada e elegante do nosso cassino cria o cenário perfeito para você se divertir e relaxar após suas atividades.
<br/><br/>
Além disso, oferecemos um serviço de bar exclusivo dentro do cassino, onde você pode desfrutar de coquetéis personalizados, bebidas premium e aperitivos deliciosos enquanto joga. Nossa equipe de bartenders experientes está pronta para criar combinações saborosas e garantir que sua experiência seja verdadeiramente excepcional.
<br/><br/>
Lembramos que o Cassino do Hotel Continental é um espaço dedicado ao entretenimento e diversão. Encorajamos nossos hóspedes a jogarem de forma responsável e a desfrutarem de uma atmosfera de camaradagem e relaxamento durante sua estadia.
<br/><br/>
Venha se juntar a nós em nosso Cassino exclusivo, onde a sorte está ao seu lado e a emoção está no ar. Entre em contato com nossa equipe para obter informações sobre eventos especiais, torneios de poker ou outras promoções emocionantes que possamos oferecer. No Hotel Continental, estamos comprometidos em proporcionar momentos inesquecíveis e experiências excepcionais em cada visita.
</p>
<br/><br/>
</div>
        </>

  );
}

export default Cassino;