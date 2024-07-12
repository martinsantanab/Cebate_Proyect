import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
  faUserCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

export default function NavbarComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para el inicio de sesión

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLoginClick = () => {
    // Simulador el inicio de sesión
    setIsLoggedIn(!isLoggedIn);
    const message = isLoggedIn ? "Sesión cerrada" : "Sesión iniciada";
    toast.info(message);
  };

  const handleCartClick = () => {
    toast.warn(
      "Este carrito aún está en construcción, gracias por su paciencia."
    );
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const scrollToTopAndNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const changeLanguage = (lang) => {
    toast.warn(`Esta aún está en construcción, gracias por su paciencia.`);
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
                className={`nav-link ${
                  activeLink === "/" ? "active" : ""
                } link`}
                onClick={() => scrollToTopAndNavigate("/")}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "/productos" ? "active" : ""
                } link`}
                onClick={() => scrollToTopAndNavigate("/productos")}
              >
                Productos
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "/sobre-nosotros" ? "active" : ""
                } link`}
                onClick={() => scrollToTopAndNavigate("/sobre-nosotros")}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "/contacto" ? "active" : ""
                } link`}
                onClick={() => scrollToTopAndNavigate("/contacto")}
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
                <Button
                  variant="outline-light"
                  className="border-0"
                  onClick={toggleSearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button
                  variant="outline-light"
                  className={`border-0 ms-3 ${isLoggedIn ? "logged-in" : ""}`}
                  onClick={handleLoginClick}
                >
                  <FontAwesomeIcon
                    icon={isLoggedIn ? faUserCheck : faUserCircle}
                  />
                </Button>
                <Button
                  variant="outline-light"
                  className="border-0 ms-3"
                  onClick={handleCartClick}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
                <Button
                  variant="outline-light"
                  className="border-0 ms-3"
                  onClick={() => changeLanguage("es")}
                >
                  <img
                    src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1fa-1f1fe.svg"
                    alt="Spanish"
                    width="24"
                    height="24"
                  />
                </Button>
                <Button
                  variant="outline-light"
                  className="border-0 ms-3"
                  onClick={() => changeLanguage("en")}
                >
                  <img
                    src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ec-1f1e7.svg"
                    alt="English"
                    width="24"
                    height="24"
                  />
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
      <div className="navbar-divider"></div>
    </div>
  );
}
