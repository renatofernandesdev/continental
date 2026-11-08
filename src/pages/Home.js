import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/img1.jpg'
import IMG2 from '../img/img2.jpg'
import IMG3 from '../img/locais/sauna/sauna2.jpg'
import IMG4 from '../img/img4.jpg'
import IMG5 from '../img/img5.jpg'

function Main() {
  return(
<div class="border border-5 border-info home_border">
    <div class="border border-5 border-info home_border">
      
    <Carousel fade>
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
        <Carousel.Item>
          <a alt="" href="http://www.google.com.br">
            <img className="d-block w-100" src={IMG5} alt="Quinto slide"/>
          </a>
        </Carousel.Item>
      </Carousel>


      <center><br/><h2>Bem-vindo ao Hotel Continental: O refúgio dos conhecedores e oásis de exclusividade.</h2></center>
<br/><br/>

<p class="p2">
Experimente a elegância incomparável e o serviço impecável do lendário Hotel Continental. Localizado em um local privilegiado, nosso hotel fictício é o destino perfeito para aqueles que buscam um ambiente luxuoso e discreto. 
Seja você um viajante exigente ou um conhecedor de classe mundial, temos o prazer de oferecer a você uma experiência verdadeiramente extraordinária.Nossas suítes e quartos meticulosamente projetados proporcionam conforto supremo e uma sensação de luxo
sofisticado. Cada detalhe foi cuidadosamente pensado para garantir sua satisfação, desde a roupa de cama de alta qualidade até a decoração elegante e os recursos tecnológicos de ponta. 
Com acomodações para todos os gostos, temos certeza de que você encontrará a opção perfeita para sua estadia.
<br/><br/>
Além disso, o Hotel Continental oferece uma variedade de espaços de entretenimento para aprimorar sua experiência. Relaxe e desfrute de momentos tranquilos no nosso Lounge exclusivo,
onde a atmosfera serena e os coquetéis artesanais criam o ambiente perfeito para socializar ou simplesmente apreciar um momento de tranquilidade.
<br/><br/>
Se você é adepto de atividades físicas, nossa Sala de Esportes bem equipada é o lugar ideal para manter-se ativo durante sua estadia. Com equipamentos modernos e um ambiente estimulante, você poderá se exercitar e manter sua rotina de fitness.
Após um dia agitado, permita-se relaxar e revigorar na nossa sauna de luxo. Deixe o calor suave e a atmosfera calmante revitalizarem seus sentidos, proporcionando-lhe uma sensação de tranquilidade e bem-estar.
<br/><br/>
E para os entusiastas do jogo, nosso exclusivo Cassino oferece uma experiência emocionante e sofisticada. Desafie a sorte em uma variedade de jogos de azar enquanto desfruta do ambiente elegante e do serviço impecável que o Hotel Continental é conhecido.
<br/><br/>
Aproveite a oportunidade para explorar o mundo fascinante do Hotel Continental, onde cada momento é cuidadosamente concebido para superar suas expectativas. Confira nossas ofertas de suítes e quartos disponíveis agora e permita-nos proporcionar a você uma estadia inesquecível, cercada de luxo, elegância e serviços excepcionais. Seja bem-vindo ao Hotel Continental - onde a exclusividade ganha vida.
</p><br/>




    </div>
</div>
  );
}

export default Main;