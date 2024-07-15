import { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import TrendingProducts from '../components/TrendingProducts';


export default function ContactPage() {
  useEffect(() => {
    document.title = "Contacto | cebate - La Marca del Mate";
  }, []);
  
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h2>Contacto</h2>
      </header>
      <Container className="contact-info">
        <Row>
          <Col md={4} className="info-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="info-icon" />
            <h3>Showroom</h3>
            <p>Jackson 896  14 a 19hs (Lunes a Viernes)</p>
            <p>Montevideo, 11300</p>
          </Col>
          <Col md={4} className="info-card">
            <FontAwesomeIcon icon={faPhone} size="2x" className="info-icon" />
            <h3>Whatsapp</h3>
            <p>+598 91 000 000</p>
          </Col>
          <Col md={4} className="info-card">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="info-icon" />
            <h3>Email</h3>
            <p>info@cebate.com.uy</p>
          </Col>
        </Row>
      </Container>
      <Container className="contact-map-form">
        <Row>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6543.484285170729!2d-56.17237900000001!3d-34.91292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8143a44ef32b%3A0xa23d4f050e6f2325!2sCebala%20%7C%20La%20marca%20del%20mate!5e0!3m2!1ses-419!2suy!4v1720217265624!5m2!1ses-419!2suy"
              width="100%"
              height="420"
            ></iframe>
          </Col>
          <Col md={6}>
            <h2>Envíanos un mensaje</h2>
            <p>Te respondemos lo antes posible</p>
            <Form>
              <Form.Group controlId="name">
                <Form.Label></Form.Label>
                <Form.Control type="text" required placeholder="Nombre*" />
              </Form.Group>
              <Form.Group controlId="surname">
                <Form.Label></Form.Label>
                <Form.Control type="text" required placeholder="Apellido*" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label></Form.Label>
                <Form.Control type="email" required placeholder="Email*" />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows={3} required placeholder="Mensaje*" />
              </Form.Group>
              <Button type="submit" variant="primary">Enviar mensaje</Button>
            </Form>
          </Col>
        </Row>
      </Container>
     <TrendingProducts />
    </div>
  );
}