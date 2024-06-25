import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUndo,
  faHeadset,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import NavbarComponent from "../components/Navbar";

const products = [
  {
    name: "Mates",
    count: 45,
    image: "/public/images/mate.1.png",
    hoverColorClass: "hover-celeste",
  },
  {
    name: "Bombillas",
    count: 28,
    image: "/public/images/bombilla.1.png",
    hoverColorClass: "hover-amarillo",
  },
  {
    name: "Termos",
    count: 23,
    image: "/public/images/termo.1.png",
    hoverColorClass: "hover-gris",
    sizeClass: "product-normal",
  },
  {
    name: "Materas",
    count: 5,
    image: "/public/images/matera.1.png",
    hoverColorClass: "hover-celeste",
  },
];
const items = [
  {
    title: "Title1",
    text: "This is some text for item 1.",
    hoverColorClass: "hover-celeste",
  },
  {
    title: "Title2",
    text: "This is some text for item 2.",
    hoverColorClass: "hover-amarillo",
  },
  {
    title: "Title3",
    text: "This is some text for item 3.",
    hoverColorClass: "hover-gris",
  },
  {
    title: "Title4",
    text: "This is some text for item 4.",
    hoverColorClass: "hover-celeste",
  },
];

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="home-container">
        <video autoPlay loop muted className="video-background">
          <source src="/public/video/CebalaHomeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <Container>
            <Row>
              <Col xs={12} md={6} lg={3} className="info-item">
                <FontAwesomeIcon icon={faTruck} size="2x" />
                <p className="fontBold">Enviamos dentro de Uruguay</p>
                <p className="text-white-50">Envío express.</p>
              </Col>
              <Col xs={12} md={6} lg={3} className="info-item">
                <FontAwesomeIcon icon={faUndo} size="2x" />
                <p className="fontBold">100% Cash Back</p>
                <p className="text-white-50">
                  Tenes 30 días para devolver tu compra.
                </p>
              </Col>
              <Col xs={12} md={6} lg={3} className="info-item">
                <FontAwesomeIcon icon={faHeadset} size="2x" />
                <p className="fontBold">Soporte 24/7</p>
                <p className="text-white-50">
                  Contactanos y te responderemos a la brevedad.
                </p>
              </Col>
              <Col xs={12} md={6} lg={3} className="info-item">
                <FontAwesomeIcon icon={faLock} size="2x" />
                <p className="fontBold">100% Pago seguro</p>
                <p className="text-white-50">
                  Tu pago está seguro con nosotros.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="products-section">
        <Row>
          {products.map((product, index) => (
            <Col xs={12} md={6} lg={3} key={index} className="product-item">
              <div className={`product-card ${product.hoverColorClass}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h5>{product.name}</h5>
                  <p>{product.count}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="items-section">
        <Row>
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={3} key={index} className="item">
              <div className={`item-card ${item.hoverColorClass}`}>
                <div className="item-info">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
