import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/locais/sauna/sauna1.jpg'
import IMG2 from '../img/locais/sauna/sauna2.jpg'

function Sauna() {

  return (

        <>
<div class="border border-5 border-info home_border">


<Carousel fade class="css-carrousel">

        <Carousel.Item>
          <a href="/">
            <img className="d-block w-100" src={IMG1} alt="Terceiro slide"/>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/">
            <img className="d-block w-100" src={IMG2} alt="Quarto slide"/>
          </a>
        </Carousel.Item>

      </Carousel>


        <br/><h1>Hotel Continental: Sauna</h1><br/><br/>

        <p class="p2">No Hotel Continental, reconhecemos a importância do relaxamento e do autocuidado para nossos hóspedes, inclusive para aqueles que se dedicam a tarefas exigentes. Apresentamos a nossa exclusiva Sauna, um santuário de tranquilidade projetado para proporcionar momentos de descanso e revitalização.
<br/><br/>
Em nossa Sauna exclusiva, convidamos nossos hóspedes a desfrutar de um ambiente sereno e rejuvenescedor após longas jornadas de trabalho. A sauna é meticulosamente projetada para oferecer o máximo de conforto e privacidade, permitindo que você se desconecte do mundo exterior e mergulhe em um oásis de relaxamento.
<br/><br/>
A temperatura controlada e o ambiente tranquilo criam as condições perfeitas para que você possa liberar o estresse acumulado, aliviar a tensão muscular e revitalizar sua mente e corpo. Permita que o calor envolvente e o vapor suave da sauna melhorem sua circulação sanguínea, promovendo uma sensação de bem-estar profundo.
<br/><br/>
Nossa equipe dedicada está disponível para fornecer toalhas frescas, água refrescante e outros serviços adicionais para garantir sua máxima comodidade durante a visita à nossa Sauna. Além disso, oferecemos opções de tratamentos opcionais, como massagens terapêuticas e aromaterapia, para elevar ainda mais a experiência de relaxamento.
<br/><br/>
Lembramos que a Sauna do Hotel Continental é um espaço de tranquilidade e relaxamento, onde a privacidade de cada hóspede é respeitada. É um ambiente perfeito para rejuvenescer e recarregar suas energias, independentemente das exigências de seu trabalho.
<br/><br/>
Venha desfrutar de momentos de relaxamento profundo em nossa Sauna, onde o calor e a tranquilidade se combinam para criar uma experiência revigorante. Entre em contato com nossa equipe para reservas e mais informações sobre os tratamentos disponíveis. No Hotel Continental, valorizamos sua saúde e bem-estar, proporcionando um ambiente sereno e acolhedor para você descansar após suas atividades.
</p>
<br/><br/>


</div>
        </>

  );
}

export default Sauna;