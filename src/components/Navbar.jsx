import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Asegúrate de que esta ruta sea correcta según la estructura de tu proyecto

export default function NavbarComponent() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  const handleLoginClick = () => {
    alert('Aún no es posible iniciar sesión, gracias por su paciencia');
  };

  const handleCartClick = () => {
    alert('Este carrito aún está en construcción, gracias por su paciencia.');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="custom-navbar">
      <Navbar expand="lg" fixed="top" className="bg-dark bg-opacity-75">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/images/webSite_Clicka/logoclicka.png"
              height="35"
              className="ms-3 d-inline-block align-top"
              alt="Clicka logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 navbar-nav-scroll"
              activeKey={activeLink}
              onSelect={handleSelect}
            >
              <LinkContainer to="/" onClick={() => setActiveLink('/')}>
                <Nav.Link eventKey="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Products" onClick={() => setActiveLink('/Products')}>
                <Nav.Link eventKey="/Products" className={`nav-link ${activeLink === '/Products' ? 'active' : ''}`}>Productos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/nosotros" onClick={() => setActiveLink('/nosotros')}>
                <Nav.Link eventKey="/nosotros" className={`nav-link ${activeLink === '/nosotros' ? 'active' : ''}`}>Nosotros</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contacto" onClick={() => setActiveLink('/contacto')}>
                <Nav.Link eventKey="/contacto" className={`nav-link ${activeLink === '/contacto' ? 'active' : ''}`}>Contacto</Nav.Link>
              </LinkContainer>
            </Nav>
            <div className="navbar-icons d-flex align-items-center">
              {searchVisible && (
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Buscar"
                  />
                </Form>
              )}
              <Button variant="outline-light" className="border-0" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <Button variant="outline-light" className="border-0 ms-3" onClick={handleLoginClick}>
                <FontAwesomeIcon icon={faUserCircle} />
              </Button>
              <Button variant="outline-light" className="border-0 ms-3" onClick={handleCartClick}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-divider"></div>
    </div>
  );
}
