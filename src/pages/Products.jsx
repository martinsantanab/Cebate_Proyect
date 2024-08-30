import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const products = [
  {
  id: 1,
      name: "Termo Cebala 1lt [min. 10 unidades]",
      price: 1889,
      image: "/public/images/termo.1.png",
      categories: "Regalos Empresariales",
      stock: 10,
      onSale: false,
      oldPrice: null,
      hasOptions: true
    },
    {
      id: 2,
      name: "Mate Acero Inoxidable Premium Negro [min. 15 unidades]",
      price: 990,
      image: "/public/images/mate.1.png",
      categories: "Regalos Empresariales",
      stock: 15,
      onSale: false,
      oldPrice: null,
      hasOptions: false
    },
    {
      id: 3,
      name: "Mate Acero Inoxidable Premium Blanco [min. 15 unidades]",
      price: 990,
      image: "/public/images/mate-blanco.jpg",
      categories: "Regalos Empresariales",
      stock: 15,
      onSale: false,
      oldPrice: null,
      hasOptions: false
    },
    {
      id: 4,
      name: "Bombilla Acero Inoxidable Premium [Negro]",
      price: 790,
      image: "/public/images/bombillanegra.jpg",
      categories: "Bombillas",
      stock: 5,
      onSale: true,
      oldPrice: 890,
      hasOptions: false
    },
    {
      id: 5,
      name: "Mate Acero Inoxidable Premium [Blanco]",
      price: 990,
      image: "/public/images/mate-blanco.jpg",
      categories: "Mates",
      stock: 20,
      onSale: false,
      oldPrice: null,
      hasOptions: false
    },
    {
      id: 6,
      name: "Mate Acero Inoxidable Premium [Negro]",
      price: 990,
      image: "/public/images/mate.1.png",
      categories: "Mates",
      stock: 15,
      onSale: true,
      oldPrice: 1090,
      hasOptions: false
    },
    {
      id: 7,
      name: "Termo Cebala 1lt",
      price: 1750,
      image: "/public/images/termo.1.png",
      categories: "Termos",
      stock: 10,
      onSale: false,
      oldPrice: null,
      hasOptions: false
    },
    {
      id: 8,
      name: "Matera Bamboo",
      price: 1700,
      image: "/public/images/matera-cuero-cebala.webp",
      categories: "Materas",
      stock: 8,
      onSale: false,
      oldPrice: null,
      hasOptions: true
    },
    {
      id: 9,
      name: "Matera Cartera Zaira",
      price: 2960,
      image: "/public/images/Matera-Cartera-Zaira.webp",
      categories: "Carteras",
      stock: 12,
      onSale: true,
      oldPrice: 3290,
      hasOptions: false
    },
    {
      id: 10,
      name: "Mate De Cerámica Forrado",
      price: 490,
      image: "/public/images/mate-de-ceramica.webp",
      categories: "Mates",
      stock: 18,
      onSale: false,
      oldPrice: null,
      hasOptions: true
    }
  ];


export default function Products() {
  useEffect(() => {
    document.title = "Productos | cebate - La Marca del Mate";
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOption) {
      case 'priceLowToHigh':
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'alphabetical':
        updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
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
    <div className="product-page">
      <header className="product-header">
        <h2>Productos</h2>
      </header>
      <Container className="product-info">
       
          <div className="search-container">
            <Form.Control
              type="text"
              placeholder="Buscar productos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="sort-container" >
             <Form.Control
              as="select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Orden predeterminado</option>
              <option value="priceLowToHigh">Ordenar por price: bajo a alto</option>
              <option value="priceHighToLow">Ordenar por price: alto a bajo</option>
              <option value="alphabetical">Ordenar alfabeticamente</option>
              <option value="latest">Ordenar por los últimos</option>
            </Form.Control>
          </div>
        
      </Container>
      <Container>
        <Row>
          <Col>
            <p className="results">MOSTRANDO LOS {filteredProducts.length} RESULTADOS</p>
          </Col>
        </Row>
        <Row>
          {filteredProducts.map((product) => (
            <Col md={3} key={product.id} className="trending-product mb-4">
              <div className="product-container">
                <div className="product-image-container">
                  {product.stock === 0 && <div className="badge-stock">Agotado</div>}
                  {product.onSale && <div className="badge-sale">OFERTA</div>}
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="price-info"></div>
                  <p>${product.price.toFixed(0)} {product.oldPrice && (
                    <span className="old-price">${product.oldPrice.toFixed()}</span>
                  )}</p>
                  <Button variant="secondary" className="add-to-cart-button">
                    Añadir al carrito
                  </Button>                  
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
