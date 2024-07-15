import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';


export default function Login () {
  return (
    <Container className="login-container">
    <Row className="justify-content-center align-items-center vh-100">
      <Col md={5} className="login-section">
        <h2>Acceder</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre de usuario o correo electrónico *</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu usuario o email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña *</Form.Label>
            <Form.Control type="password" placeholder="Introduce tu contraseña" />
            <i className="bi bi-eye"></i>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuérdame" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Acceso
          </Button>
        </Form>
        <a href="#" className="forgot-password">¿Olvidaste la contraseña?</a>
      </Col>

      <Col md={5} className="register-section">
        <h2>Registrarse</h2>
        <Form>
          <Form.Group controlId="formRegisterEmail">
            <Form.Label>Dirección de correo electrónico *</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu email" />
          </Form.Group>

          <p>Se enviará un enlace a tu dirección de correo electrónico para establecer una nueva contraseña.</p>
          <p>Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web, gestionar el acceso a tu cuenta y otros propósitos descritos en nuestra <a href="#">política de privacidad</a>.</p>

          <Button variant="primary" type="submit" className="w-100">
            Registrarse
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>

  );
}