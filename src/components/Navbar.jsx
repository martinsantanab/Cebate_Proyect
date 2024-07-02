import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export default function NavbarComponent() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLoginClick = () => {
    alert('Aún no es posible iniciar sesión, gracias por su paciencia');
  };

  const handleCartClick = () => {
    alert('Este carrito aún está en construcción, gracias por su paciencia.');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const changeLanguage = (lang) => {
    // Aquí puedes manejar el cambio de idioma según el valor de lang
    alert(`Idioma cambiado a: ${lang}`);
  };

  return (
    <div className="custom-navbar">
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="public/images/cebateLogopngBlanco.png"
              height="70"
              className="navbar-logo"
              alt="CEBATE"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="w-100 justify-content-around">
              <LinkContainer to="/" onClick={() => setActiveLink('/')}>
                <Nav.Link eventKey="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products" onClick={() => setActiveLink('/products')}>
                <Nav.Link eventKey="/products" className={`nav-link ${activeLink === '/products' ? 'active' : ''}`}>Productos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus" onClick={() => setActiveLink('/aboutus')}>
                <Nav.Link eventKey="/aboutus" className={`nav-link ${activeLink === '/aboutus' ? 'active' : ''}`}>Sobre Nosotros</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" onClick={() => setActiveLink('/contact')}>
                <Nav.Link eventKey="/contact" className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}>Contacto</Nav.Link>
              </LinkContainer>
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
                <Button variant="outline-light" className="border-0 ms-3" onClick={() => changeLanguage('es')}>
                  <img src="public\images\spanishFlag.png" alt="Spanish" width="24" height="24" />
                </Button>
                <Button variant="outline-light" className="border-0 ms-3" onClick={() => changeLanguage('en')}>
                  <img src="public\images\usaFlag.png" alt="English" width="24" height="24" />
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-divider"></div>
    </div>
  );
}