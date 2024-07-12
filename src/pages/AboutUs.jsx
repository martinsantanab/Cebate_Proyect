import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


export default function AboutUs() {
  useEffect(() => {
    document.title = "Sobre Nosotros | cebate - La Marca del Mate";
  }, []);

  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h2>Sobre nosotros</h2>
      </header>
      <Container className="banner-box">
        <div className="video-container">
          <video loop playsInline muted autoPlay className="video">
            <source
              src="https://anima.edu.uy/wp-content/uploads/2022/06/pasillos-anima-resized.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Container>
      <Container className="team-info">
        <div className="timeline">
          <div className="year" style={{ backgroundColor: '#f3f5f7' }}>
            <div className="year-text">
            <h5>Junio - 2023</h5>
            <h6>Apertura oficial del programa ÁNIMA - FINEST</h6>
            <p>
            Comenzamos las clases, teniendo la oportunidad de ser parte del grupo de estudiantes de esta primera generación.
            </p>
            </div>
          </div>
          <div className="year" style={{ backgroundColor: '#eceef0' }}>
          <div className="year-text">
            <h5>Septiembre - 2023</h5>
            <h6>
              Aprendimos a utilizar HTML, CSS, Boostrap,JavaScript Git y GitHub
            </h6>
            <p>
            Pusimos en práctica los conocimientos y habilidades adquiridas en el proyecto final del primer semestre.

            </p>
            </div>
          </div>
          <div className="year" style={{ backgroundColor: '#e2e6ea' }}>
          <div className="year-text">
            <h5>Mayo - 2024</h5>
            <h6>
              Aprendimos a utilizar Node.js, SQL + Sequelize, JWT + Bcrypt,
              React y Redux
            </h6>
            <p>
            Comenzamos a trabajar en el backend del proyecto final, creamos la API que sería utilizada para el mismo, incorporando los conocimientos y

            </p>
            </div>
          </div>
          <div className="year" style={{ backgroundColor: '#dadee3' }}>
          <div className="year-text">
            <h5>Junio - 2024</h5>
            <h6>Entrega del proyecto final y egreso</h6>
            <p>
              En 3 semanas aplicamos todo lo aprendido durante el trayecto en
              Ánima. Realizamos este sitio web como proyecto final y egresamos
              del bachillerato como Desarrolladores Web FullStack.
            </p>
          </div>
          </div>
        </div>
      </Container>
      <Container className="stats-container">
        <h3>Hoy en día...</h3>
        <div className="stats">
          <div className="stat">
            <h4>CRECIMIENTO</h4>
            <p>ADQUIRIMOS Y POTENCIAMOS COMPETENCIAS TÉNICAS Y TRANSVERSALES</p>
          </div>
          <div className="stat">
            <h4>PROYECTOS FINALES</h4>
            <p>
              ENTREGAMOS SATIFACTORIAMENTE DOS PROYECTOS FINALES
            </p>
          </div>
          <div className="stat">
            <h4>V = [C+H] x A </h4>
            <p>APRENDIMOS Y PONEMOS EN PRÁCTICA LA FORMULA DE VICTOR KÜPPERS</p>
          </div>
        </div>
      </Container>
      <Container className="contact-container-about">
        <p>
          Seguimos creciendo, aprendiendo y evolucionando, pero con el objetivo bien presente en nuestra mente: <strong>
          destacar en el rubro por nuestro valor y creatividad, como sabemos el
          que viaje es mejor cuando estas acompañado, te invitamos a formar
          parte de nuestro camino...</strong>
        </p>
        <button className="contact-button" onClick={() => window.location.href = '/contacto'}>Contáctanos</button>
      </Container>
      <Container className="banner-box-anima">
        <div className="video-container-anima">
          <video loop playsInline muted autoPlay className="video">
            <source
              src="/public/video/video_anima.mp4"
              title="ÁNIMA FINEST"
              type="video/mp4"
            />
          </video>
        </div>
      </Container>
      
      <Container className="creators-container">
        <h2>Nuestro equipo</h2>
        <div className="creators">
          <div className="creator-card">
            <img
              src="/public/images/guzman.jpeg"
              alt="Guzman De León"
              className="profile-pic"
            />
            <h3>Guzmán de León</h3>
            <h6>Full Stack Web Developer</h6>
            <p>
              Egresado de la primera generación de ÁNIMA-FINEST Bachillerato
              Tecnológico.
            </p>
            <div className="social-icons-aboutus">
              <a
                href="https://www.linkedin.com/in/guzman-d-b0114a107/"
                target="_blank"
                rel="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="GitHub"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/Namzug"
                target="_blank"
                rel="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="creator-card">
            <img
              src="/public/images/martin.jpeg"
              alt="Martin Santana"
              className="profile-pic"
            />
            <h3>Martin Santana</h3>
            <h6>Full Stack Web Developer</h6>
            <p>
              Egresado de la primera generación de ÁNIMA-FINEST Bachillerato
              Tecnológico.
            </p>
            <div className="social-icons-aboutus">
              <a
                href="https://www.linkedin.com/in/mart%C3%ADn-santana-b91a512a3/"
                target="_blank"
                rel="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/martinsantanab/"
                target="_blank"
                rel="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/martinsantanab"
                target="_blank"
                rel="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="creator-card">
            <img
              src="/public/images/logan.jpeg"
              alt="Logan Aresche"
              className="profile-pic"
            />
            <h3>Logan Aresche</h3>
            <h6>Full Stack Web Developer</h6>
            <p>
              Egresado de la primera generación de ÁNIMA-FINEST Bachillerato
              Tecnológico.
            </p>
            <div className="social-icons-aboutus">
              <a
                href="https://www.linkedin.com/in/logan-aresche"
                target="_blank"
                rel="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/jupiterproducer"
                target="_blank"
                rel="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/loganjupiter"
                target="_blank"
                rel="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="creator-card">
            <img
              src="/public/images/anto.jpeg"
              alt="Antonella Garelli"
              className="profile-pic"
            />
            <h3>Antonella Garelli</h3>
            <h6>Full Stack Web Developer</h6>
            <p>
              Egresado de la primera generación de ÁNIMA-FINEST Bachillerato
              Tecnológico.
            </p>
            <div className="social-icons-aboutus">
              <a
                href="https://www.linkedin.com/in/antonella-garelli-5099402b8/"
                target="_blank"
                rel="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/dev-antonella"
                target="_blank"
                rel="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row technologies">
          <h3>
            Tecnologías Utilizadas:
          </h3>
          <br />
          <Splide
            options={{
              type: "loop",
              perPage: 4, 
              gap: "0px", 
              autoScroll: {
                speed: 0.5, 
                pauseOnHover: false,
                pauseOnFocus: false,
              },
              arrows: false,
              pagination: false,
            }}
            extensions={{ AutoScroll }}
            aria-label="Text Carrousel"
          >
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/bootstrap.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Bootstrap"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="">
                <img
                  src={`/public/images/express.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Express.js"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/github.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="GitHub"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/mysql.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="MySQL"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/node.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Node.js"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/react.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="React"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/redux.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Redux"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="logo-technologies">
                <img
                  src={`/public/images/sequelize.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Sequelize"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </div>
  );
}
