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

const baseUrl = "/path/to/your/images/"; // Define la base URL

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
          <div className="year">
            <h3>Junio - 2023</h3>
            <p>Apertura oficial del programa ÁNIMA - FINEST</p>
            <p>
              Comienamos las clases, teniendo la oportunidad de ser parte del
              grupo de estudiantes de esta primera generación.
            </p>
          </div>
          <div className="year">
            <h3>Septiembre - 2023</h3>
            <p>
              Aprendimos a utilizar HTML, CSS, Boostrap,JavaScript Git y GitHub
            </p>
            <p>
              Pusimos en practica los conocimientos y habilidades adquiridas en
              el proyecto final del primer semestre.
            </p>
          </div>
          <div className="year">
            <h3>Mayo - 2024</h3>
            <p>
              Aprendimos a utilizar Node.js, SQL + Sequelize, JWT + Bcrypt,
              React y Redux
            </p>
            <p>
              Comenzamos a trabajar en el backend del proyecto final, creamos la
              API que sería utilizada para el mismo, incorporando los
              conocimientos y habilidades adquiridas.
            </p>
          </div>
          <div className="year">
            <h3>Junio - 2024</h3>
            <p>Entrega del proyecto final y egreso</p>
            <p>
              En 3 semanas aplicamos todo lo aprendido durante el trayecto en
              Ánima. Realizamos este sitio web como proyecto final y egresamos
              del bachillerato como Desarrolladores Web FullStack.
            </p>
          </div>
        </div>
      </Container>
      <Container className="stats-container">
        <h2>Hoy en día..</h2>
        <div className="stats">
          <div className="stat">
            <h3>CRECIMIENTO</h3>
            <p>ADQUIRIMOS Y POTENCIAMOS COMPETENCIAS TÉNICAS Y TRANSVERSALES</p>
          </div>
          <div className="stat">
            <h3>PROYECTOS FINALES</h3>
            <p>
              CUMPLIMOS CON LA ENTREGA DE 2 PROYECTOS, RECIBIENDO EXCELENTES
              DEVOLUCIONES
            </p>
          </div>
          <div className="stat">
            <h3>V = [C+H] x A </h3>
            <p>APRENDIMOS Y PONEMOS EN PRÁCTICA LA FORMULA DE VICTOR KÜPPERS</p>
          </div>
        </div>
      </Container>
      <Container className="contact-container">
        <p>
          Seguimos creciendo, aprendiendo y evolucionando, como profesionales y
          personas, pero con el objetivo bien presente en nuestra mente:
          destacar en el rubro por nuestro valor y creatividad, como sabemos el
          que viaje es mejor cuando estas acompañado, te invitamos a formar
          parte de nuestro camino0z
        </p>
        <button className="contact-button">Contáctanos</button>
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
      <Container>
        <div className="row sponsorsBackground">
          <h3 className="text-white helvetica text-center">
            Tecnologías Utilizadas:
          </h3>
          <br />
          <Splide
            options={{
              type: "loop",
              perPage: 4, // Ajusta el número de diapositivas visibles
              gap: "0px", // Ajusta la brecha entre las diapositivas
              autoScroll: {
                speed: 2, // Velocidad de desplazamiento
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
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}municipioB.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}lotus.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}complejosalashow.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}oroNegro.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}chains.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}apartamento503.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}hhh.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="d-flex align-items-center justify-content-center sponsorsSize">
                <img
                  src={`${baseUrl}cloud.png`}
                  className="d-block w-50 img-fluid carousel-image"
                  alt="Third slide"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
      <Container className="creators-container">
        <h2>Equipo</h2>
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
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/jupiterproducer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/loganjupiter"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
