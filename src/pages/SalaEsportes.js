import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/locais/esportes/esportes1.jpeg'
import IMG2 from '../img/locais/esportes/esportes2.jpeg'

function SalaEsportes() {

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

      </Carousel>


        <br/><h1>Hotel Continental: Sala de Esportes</h1><br/><br/>

        <p class="p2">No Hotel Continental, valorizamos o bem-estar e a diversidade de interesses de nossos hóspedes, incluindo a busca por atividades esportivas emocionantes. Apresentamos com orgulho a nossa exclusiva Sala de Esportes, um espaço projetado para os amantes de adrenalina e estratégia.
        <br/><br/>
Em nosso cenário especialmente projetado, oferecemos uma experiência única de airsoft, onde os participantes podem vivenciar a emoção e a estratégia desse jogo tático. Nossa Sala de Esportes é equipada com um campo de airsoft detalhadamente projetado, com obstáculos estrategicamente posicionados, corredores estreitos e esconderijos desafiadores.
<br/><br/>
Convidamos você a participar de batalhas emocionantes, utilizando réplicas realistas de armas de airsoft e equipamentos de proteção de última geração. Nossa equipe dedicada e experiente está pronta para fornecer orientação e supervisão, garantindo a segurança e a diversão de todos os participantes.
<br/><br/>
Se você é um entusiasta de airsoft, um amante de estratégia e busca uma experiência emocionante e desafiadora, nossa Sala de Esportes é o local ideal para você. Venha enfrentar desafios estimulantes, testar suas habilidades táticas e criar momentos inesquecíveis com amigos, colegas de trabalho ou outros hóspedes do Hotel Continental.
<br/><br/>
Lembramos que a Sala de Esportes do Hotel Continental é projetada exclusivamente para o entretenimento e não promove violência real ou atividades prejudiciais. É um espaço seguro, onde o espírito de competição saudável e o trabalho em equipe são incentivados.
<br/><br/>
Desfrute de uma experiência de airsoft única em nossa Sala de Esportes, onde estratégia, adrenalina e diversão se encontram. Entre em contato com nossa equipe para reservas e mais informações sobre essa emocionante atividade esportiva disponível no Hotel Continental. Prepare-se para mergulhar em um mundo de ação e desafios estratégicos enquanto cria memórias duradouras.
</p>
<br/><br/>

</div>
        </>

  );
}

export default SalaEsportes;