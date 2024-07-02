import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; // Importa NavLink desde react-router-dom
import '../App.css';

export default function FooterComponent () {
  return (
    <footer>
      <div className="newsletter-section  text-white text-center py-3">
        <div className="div-subscribe">
          <h2 className="">No te pierdas nuestras noticias</h2>
          <Form inline className="d-flex justify-content-center">
            <Form.Control type="email" placeholder="Ingrese su email" className="email-form mr-2" />
            <Button type="submit" className="btn-subscribe">Suscribirse</Button>
          </Form>
        </div>
      </div>
      <Container fluid className="footer-main py-5">
        <Row>
          <Col lg={3} className="text-center text-lg-left mb-4 mb-lg-0">
            <div className="footer-logo">
              <img src="public/images/cebateLogopngBlanco.png" className="ms-3 d-inline-block align-top" alt="CEBATE" />
              <p className="slogan">Más que una marca, una cultura.</p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="icon-spacing">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com" className="icon-spacing">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" className="icon-spacing">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </Col>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white fw-bold">Links Útiles</h5>
            <ul className="list-unstyled">
              <li className="text-white"><NavLink to="/aboutus" className="text-reset">Sobre nosotros</NavLink></li>
              <li className="text-white"><NavLink to="/contact" className="text-reset">Contacto</NavLink></li>
              <li className="text-white"><NavLink to="/products" className="text-reset">Tienda</NavLink></li>
              <li className="text-white"><a href="#" className="text-reset">Blog</a></li>
            </ul>
          </Col>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white fw-bold">Área del Cliente</h5>
            <ul className="list-unstyled">
              <li className="text-white"><a href="#" className="text-reset">My Account</a></li>
              <li className="text-white"><a href="#" className="text-reset">Privacy Policy</a></li>
              <li className="text-white"><a href="#" className="text-reset">Orders</a></li>
              <li className="text-white"><a href="#" className="text-reset">My Cart</a></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5 className="text-uppercase text-white fw-bold">Más Información</h5>
            <ul className="list-unstyled">
              <li className="text-white">Contactanos por cualquier consulta</li>
              <li className="text-white"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@cebate.com.uy</li>
            </ul>
            <div className="payment-icons">
              <img src="public/images/mediospago.png" alt="medios de pago" className="img-fluid mr-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
