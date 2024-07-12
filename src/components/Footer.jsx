import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function FooterComponent() {
  const navigate = useNavigate();

  const notEnabledClick = () => {
    alert("Esta página aún no está disponible, gracias por su paciencia");
  };

  const scrollToTopAndNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="newsletter-section text-white text-center py-3">
        <div className="div-subscribe">
          <h2 className="">No te pierdas nuestras noticias</h2>
          <Form inline className="d-flex justify-content-center">
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              className="email-form mr-2"
            />
            <Button type="submit" className="btn-subscribe">
              Suscribirse
            </Button>
          </Form>
        </div>
      </div>
      <Container fluid className="footer-main py-5">
        <Row>
          <Col lg={3} className="text-center text-lg-left mb-4 mb-lg-0">
            <div className="footer-logo" onClick={handleLogoClick}>
              <img
                src="public/images/cebateLogopngBlanco.png"
                className="link d-inline-block align-top"
                alt="CEBATE"
              />
              <p className="slogan">Más que una marca, una cultura.</p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="icon-spacing">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com" className="icon-spacing">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" className="icon-spacing">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
          <Col lg={3} className="my-4 mb-lg-0">
            <h5 className="text-uppercase text-white fw-bold">Links Útiles</h5>
            <ul className="list-unstyled">
              <li className="text-white custom-margin">
                <span
                  className="text-reset link"
                  onClick={() => scrollToTopAndNavigate("/sobre-nosotros")}
                >
                  Sobre nosotros
                </span>
              </li>
              <li className="text-white custom-margin">
                <span
                  className="text-reset link"
                  onClick={() => scrollToTopAndNavigate("/contacto")}
                >
                  Contacto
                </span>
              </li>
              <li className="text-white custom-margin">
                <span
                  className="text-reset link"
                  onClick={() => scrollToTopAndNavigate("/productos")}
                >
                  Productos
                </span>
              </li>
              <li className="text-white custom-margin">
                <span className="text-reset link" onClick={notEnabledClick}>
                  Blog
                </span>
              </li>
            </ul>
          </Col>
          <Col lg={3} className="my-4 mb-lg-0">
            <h5 className="text-uppercase text-white fw-bold">
              Área del Cliente
            </h5>
            <ul className="list-unstyled">
              <li className="text-white custom-margin">
                <span className="text-reset link" onClick={notEnabledClick}>
                  Mi cuenta
                </span>
              </li>
              <li className="text-white custom-margin">
                <span className="text-reset link" onClick={notEnabledClick}>
                  Políticas de Privacidad
                </span>
              </li>
              <li className="text-white custom-margin">
                <span className="text-reset link" onClick={notEnabledClick}>
                  Pedidos
                </span>
              </li>
              <li className="text-white custom-margin">
                <span className="text-reset link" onClick={notEnabledClick}>
                  Mi carrito
                </span>
              </li>
            </ul>
          </Col>
          <Col lg={3} className="mt-4">
            <h5 className="text-uppercase text-white fw-bold">
              Más Información
            </h5>
            <ul className="list-unstyled">
              <li className="text-white custom-margin">
                Contáctanos por cualquier consulta
              </li>
              <li className="text-white custom-margin">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                info@cebate.com.uy
              </li>
            </ul>
            <div className="payment-icons">
              <img
                src="public/images/mediospago.png"
                alt="medios de pago"
                className="img-fluid mr-2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
