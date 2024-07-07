import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const products = [
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

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOption) {
      case 'priceLowToHigh':
        updatedProducts.sort((a, b) => a.precio - b.precio);
        break;
      case 'priceHighToLow':
        updatedProducts.sort((a, b) => b.precio - a.precio);
        break;
      case 'alphabetical':
        updatedProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'latest':
        updatedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, sortOption]);

  return (
    <Container>
      <div className="header-image-container">
        <img src="/public/images/mate.1.png" alt="Mates Header" className="header-image" />
        <div className="header-title">Mates</div>
      </div>
      <Row className="search-sort-container">
        <Col className="search-container">
          <Form.Control
            type="text"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col className="sort-container" md="auto">
          <span>Ordenar:</span>
          <Form.Control
            as="select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Orden predeterminado</option>
            <option value="priceLowToHigh">Ordenar por precio: bajo a alto</option>
            <option value="priceHighToLow">Ordenar por precio: alto a bajo</option>
            <option value="alphabetical">Ordenar alfabeticamente</option>
            <option value="latest">Ordenar por los últimos</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='results'>MOSTRANDO LOS {filteredProducts.length} RESULTADOS</p>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card">
              <div className="product-image-container">
                {product.stock === 0 && <div className="badge-stock">Agotado</div>}
                {product.onSale && <div className="badge-sale">Oferta</div>}
                <Card.Img
                  variant="top"
                  src={product.imagen}
                  className="product-image"
                />
              </div>
              <Card.Body className="card-body">
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>
                  ${product.precio.toFixed(2)}
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                </Card.Text>
                <Button variant="primary" className="add-to-cart-button" disabled={product.stock === 0}>
                  Añadir al carrito
                </Button>
                {product.hasOptions && (
                  <Form.Control as="select">
                    <option>Seleccionar opciones</option>
                    <option value="chico">Chico</option>
                    <option value="grande">Grande</option>
                  </Form.Control>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
