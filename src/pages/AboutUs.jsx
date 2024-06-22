import React, { useRef } from "react";
import "./AboutUs";

function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-intro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            corrupti, corporis aliquam, dolores aliquid ipsam quidem
            necessitatibus unde laboriosam tenetur, vero molestiae laudantium
            cumque rem? Ea nihil maxime possimus facilis.
          </p>
        </div>
        <div className="about-us-mission">
          <h2>Our mission</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In totam,
            porro itaque delectus tenetur placeat saepe sunt cupiditate eligendi
            vero quas ab. Rem enim eum similique, veniam fuga animi odit?
          </p>
        </div>
        <div className="about-us-vision">
          <h2>Our vission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            eligendi nisi quos rerum, ea obcaecati quam reiciendis possimus?
            Omnis ex minus iste perspiciatis ut incidunt optio laudantium
            consequuntur mollitia illum?Amet consectetur adipisicing elit. Nulla
            error delectus voluptatem ad modi fugit recusandae ex, reiciendis
            numquam? Nesciunt non quisquam autem iusto quia voluptatum ut nulla
            molestias reiciendis!
          </p>
        </div>
        <div className="about-us-values">
          <h2>Values</h2>
          <ul>
            <li>Innovación</li>
            <li>Compromiso</li>
            <li>Inclusión</li>
            <li>Excelencia</li>
          </ul>
        </div>
        <div className="about-us-team">
          <h2>Conoce a Nuestro Equipo</h2>
          <p>
            Lorem Guzmán dolor sit amet consectetur adipisicing elit. Expedita
            neque reiciendis in quia nihil est quasi quam veniam consequuntur
            eos, mollitia id porro. Nostrum aperiam voluptatum deserunt, laborum
            ea assumenda.
          </p>
          <p>
            Lorem Logan dolor sit amet consectetur adipisicing elit. Expedita
            neque reiciendis in quia nihil est quasi quam veniam consequuntur
            eos, mollitia id porro. Nostrum aperiam voluptatum deserunt, laborum
            ea assumenda.
          </p>
          <p>
            Lorem Antonella dolor sit amet consectetur adipisicing elit. Expedita
            neque reiciendis in quia nihil est quasi quam veniam consequuntur
            eos, mollitia id porro. Nostrum aperiam voluptatum deserunt, laborum
            ea assumenda.
          </p>
          <p>
            Lorem Martin dolor sit amet consectetur adipisicing elit. Expedita
            neque reiciendis in quia nihil est quasi quam veniam consequuntur
            eos, mollitia id porro. Nostrum aperiam voluptatum deserunt, laborum
            ea assumenda.
          </p>
        </div>
      </section>
      <footer className="about-us-footer">
        <p>&copy; 2024 CEBATE. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
