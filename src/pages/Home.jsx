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
    name: "Name1",
    count: 45,
    image: <source src="/public/images/image1.jpg" />,
    hoverImage: <source src="/public/images/image2.webp" />,
  },
  {
    name: "Name2",
    count: 28,
    image: <source src="/public/images/image2.webp" />,
    hoverImage: <source src="/public/images/image3.jpg" />,
  },
  {
    name: "Name3",
    count: 23,
    image: <source src="/public/images/image3.jpg" />,
    hoverImage: <source src="/public/images/image1.jpg" />,
  },
  {
    name: "Name4",
    count: 5,
    image: <source src="/public/images/image1.jpg" />,
    hoverImage: <source src="/public/images/image2.webp" />,
  },
];

function Home() {
  return (
    <div>
      <NavbarComponent/>
      <div className="home-container">
        <video autoPlay loop muted className="video-background">
          <source src="/public/video/CebalaHomeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <Container>
            <Row>
              <Col xs={12} md={3} className="info-item">
                <FontAwesomeIcon icon={faTruck} size="2x" />
                <p>Enviamos dentro de Uruguay</p>
                <p>Envío express.</p>
              </Col>
              <Col xs={12} md={3} className="info-item">
                <FontAwesomeIcon icon={faUndo} size="2x" />
                <p>100% Cash Back</p>
                <p>Tenes 30 días para devolver tu compra.</p>
              </Col>
              <Col xs={12} md={3} className="info-item">
                <FontAwesomeIcon icon={faHeadset} size="2x" />
                <p>Soporte 24/7</p>
                <p>Contactanos y te responderemos a la brevedad.</p>
              </Col>
              <Col xs={12} md={3} className="info-item">
                <FontAwesomeIcon icon={faLock} size="2x" />
                <p>100% Pago seguro</p>
                <p>Tu pago está seguro con nosotros.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="products-section">
        <Row>
          {products.map((product, index) => (
            <Col xs={12} md={6} lg={3} key={index} className="product-item">
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = product.hoverImage)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = product.image)}
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
    </div>
  );
}

export default Home;
