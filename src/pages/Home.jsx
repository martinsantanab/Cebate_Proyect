import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUndo,
  faHeadset,
  faLock,
} from "@fortawesome/free-solid-svg-icons";


const categories = [
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
    title: "¿Cómo curar mi mate?",
    text: "Todos los TIPS para curar tu mate de calabaza o madera.",
    hoverColorClass: "hover-celeste",
  },
  {
    title: "¿Manchas verdes en el mate?",
    text: "Es MUY normal que aparezcan estas manchas, no te asustes! Solo seguí nuestros TIPS.",
    hoverColorClass: "hover-amarillo",
  },
  {
    title: "Beneficios del mate",
    text: "Aparte de ser el mejor compañero, tiene muchos beneficios.",
    hoverColorClass: "hover-gris",
  },
  {
    title: "¿Cómo limpiar la bombilla?",
    text: "La higiene en la bombilla es fundamental. Recomendamos hacerla una vez por mes.",
    hoverColorClass: "hover-celeste",
  },
];

const productos = [
  {
    id: 1,
    nombre: "Termo Cebala 1lt [min. 10 unidades]",
    precio: 1889,
    imagen: "/path/to/image1.jpg",
    categoria: "Regalos Empresariales",
  },
  {
    id: 2,
    nombre: "Mate Acero Inoxidable Premium Negro [min. 15 unidades]",
    precio: 990,
    imagen: "/path/to/image2.jpg",
    categoria: "Regalos Empresariales",
  },
  {
    id: 3,
    nombre: "Mate Acero Inoxidable Premium Blanco [min. 15 unidades]",
    precio: 990,
    imagen: "/path/to/image3.jpg",
    categoria: "Regalos Empresariales",
  },
  {
    id: 4,
    nombre: "Bombilla Acero Inoxidable Premium [Negro]",
    precio: 790,
    imagen: "/path/to/image4.jpg",
    categoria: "Bombillas",
  },
  {
    id: 5,
    nombre: "Mate Acero Inoxidable Premium [Blanco]",
    precio: 990,
    imagen: "/path/to/image5.jpg",
    categoria: "Mates",
  },
  {
    id: 6,
    nombre: "Mate Acero Inoxidable Premium [Negro]",
    precio: 990,
    imagen: "/path/to/image6.jpg",
    categoria: "Mates",
  },
  {
    id: 7,
    nombre: "Termo Cebala 1lt",
    precio: 1750,
    imagen: "/path/to/image7.jpg",
    categoria: "Termos",
  },
  {
    id: 8,
    nombre: "Matera Bamboo",
    precio: 1700,
    imagen: "/path/to/image8.jpg",
    categoria: "Materas",
  },
  {
    id: 9,
    nombre: "Matera Cartera Zaira",
    precio: 2960,
    imagen: "/path/to/image9.jpg",
    categoria: "Carteras",
  },
  {
    id: 10,
    nombre: "Mate De Cerámica Forrado",
    precio: 4900,
    imagen: "/path/to/image10.jpg",
    categoria: "Mates",
  },
];

const principalProduct = {
  price: 2151,
  name: "Matera Pampita",
  description: "La matera que se adapta a cualquier espacio.",
  image: "/public/images/principalProduct.png",
};

function Home() {
  return (
    <>
     
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

      <Container className="categories-section">
        <Row>
          {categories.map((category, index) => (
            <Col xs={12} md={6} key={index} className="category">
              <div className={`category-card ${category.hoverColorClass}`}>
                <div className="category-info">
                  <p className="fonts text-align">{category.name}</p>

                  <img src={category.image} alt={category.name} />
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
                  <h5 className="item-title">{item.title}</h5>
                  <p className="item-description">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="padding">
        <Container fluid className="amazon-finds-section">
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="content-box">
              <Row className="align-items-center">
                <Col md={6} className="text-container">
                  <h1>Amazon finds</h1>
                  <p>
                    Ahora también podés encontrar nuestros más vendidos en
                    Amazon!
                  </p>
                  <Button
                    variant="light"
                    href="https://www.amazon.com"
                    target="_blank"
                  >
                    Ver Tienda
                  </Button>
                </Col>
                <Col md={6} className="image-container">
                  <img
                    src="/public/images/AmazonFinds.png"
                    alt="Cebala Product"
                    className="product-image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <h1 className="my-4">Productos destacados</h1>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>${producto.precio}</Card.Text>
                  <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* PRIMCIPAL PRODUCT */}

      <div
        className="principalProduct-container"
        style={{ backgroundImage: `url(${principalProduct.image})` }}
      >
        <div className="principalProduct-overlay"></div>
        <div className="principalProduct-info">
          <p className="principalProduct-price">
            Desde ${principalProduct.price}
          </p>
          <h1 className="principalProduct-name">{principalProduct.name}</h1>
          <p className="principalProduct-description">
            {principalProduct.description}
          </p>
          <button className="principalProduct-buyButton">Comprar</button>
        </div>
      </div>
      
    </>
  );
}

export default Home;
