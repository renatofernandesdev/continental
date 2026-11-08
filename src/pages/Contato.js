import React from "react"
import INSTAGRAM from "../img/logos-redes/instagram.png"
import WHATSAPP from "../img/logos-redes/whatsapp.png"
import EMAIL from "../img/logos-redes/email.png"
import TWITTER from "../img/logos-redes/twitter.png"

function Contato(props) {
  return (
<div class="border border-5 border-info home_border">
<center>
    <div class="row">
      <h2>Siga-nos nas redes sociais:</h2><br/><br/><br/>
      <a class="text-align-center a2" href="https://www.instagram.com/hotelcontinental/"><img class="img-logo" src={INSTAGRAM} alt="Logo do Instagram"/>Instagram: {props.instagram}</a>
      <a class="text-align-center a2" href="https://wa.me/32666999"><img class="img-logo" src={WHATSAPP} alt="Logo do WhatsApp"/>Whatsapp: {props.whatsapp}</a>
      <a class="text-align-center a2" href="https://twitter.com/hotelcontinental"><img class="img-logo" src={TWITTER} alt="Logo do Twitter"/>Twitter: {props.twitter}</a>
      <a class="text-align-center a2" href="mailto://continental@jhonwick.com"><img class="img-logo" src={EMAIL} alt="Logo de Email"/>E-mail: {props.email}</a>
    </div>
</center>
</div>
  );
}

export default Contato;