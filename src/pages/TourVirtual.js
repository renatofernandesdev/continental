import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../img/img1.jpg'
import IMG2 from '../img/img2.jpg'
import IMG3 from '../img/locais/sauna/sauna1.jpg'
import IMG4 from '../img/locais/sauna/sauna2.jpg'
import IMG5 from '../img/img4.jpg'
import IMG6 from '../img/img5.jpg'

function TourVirtual() {

  return (
        <>
<div class="border border-5 border-info home_border">

<br/>
        <h1>Hotel Continental: TourVirual</h1><br/>

        
      <Carousel fade>
        <Carousel.Item>
          <a href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG1} alt="Primeiro slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG2} alt="Segundo slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG3} alt="Terceiro slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG4} alt="Quarto slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a alt="" href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG5} alt="Quinto slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a alt="" href="https://hotelcontinental.netlify.app/">
            <img className="d-block w-100" src={IMG6} alt="Sexto slide"/>
          </a>
        </Carousel.Item>
      </Carousel>

<br/><br/>

</div>
        </>
  );
}

export default TourVirtual;