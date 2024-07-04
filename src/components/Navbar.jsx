import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export default function NavbarComponent() {
  const location = useLocation();
  const navigate = useNavigate();
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

  const scrollToTopAndNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const changeLanguage = (lang) => {
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
              <Nav.Link
                className={`nav-link ${activeLink === '/' ? 'active' : ''} link`}
                onClick={() => scrollToTopAndNavigate('/')}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === '/products' ? 'active' : ''} link`}
                onClick={() => scrollToTopAndNavigate('/products')}
              >
                Productos
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === '/aboutus' ? 'active' : ''} link`}
                onClick={() => scrollToTopAndNavigate('/aboutus')}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === '/contact' ? 'active' : ''} link`}
                onClick={() => scrollToTopAndNavigate('/contact')}
              >
                Contacto
              </Nav.Link>
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
                  <img src="public/images/spanishFlag.png" alt="Spanish" width="24" height="24" />
                </Button>
                <Button variant="outline-light" className="border-0 ms-3" onClick={() => changeLanguage('en')}>
                  <img src="public/images/usaFlag.png" alt="English" width="24" height="24" />
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
