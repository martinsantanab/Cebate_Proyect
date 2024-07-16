import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Destacados () {
  const DestacadosProducts = [
    {
      id: 1,
      name: "Termo Cebala 1lt [min. 10 unidades]",
      price: 1889,
      image: "/public/images/termo.1.png",
      categories: "Regalos Empresariales",
      stock: 10,
      onSale: false,
      oldPrice: null,
    },
    {
      id: 2,
      name: "Mate Acero Inoxidable [min. 15 unidades]",
      price: 990,
      image: "/public/images/mate.1.png",
      categories: "Regalos Empresariales",
      stock: 15,
      onSale: false,
      oldPrice: null,
    },
    {
      id: 3,
      name: "Mate Acero Inoxidable [min. 15 unidades]",
      price: 990,
      image: "/public/images/mate-blanco.jpg",
      categories: "Regalos Empresariales",
      stock: 15,
      onSale: false,
      oldPrice: null,
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
    }
  ];

  
  return (
    <Container>
      <Row>
        {DestacadosProducts.map(product => (
          <Col md={3} key={product.id} className="trending-product mb-4">
            <div className="product-container">
              <div className="product-image-container">
                {product.stock === 0 && <div className="badge-stock">Agotado</div>}
                {product.onSale && <div className="badge-sale">OFERTA</div>}
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="price-info">
                  <p>${product.price.toFixed(0)} {product.oldPrice && (
                    <span className="old-price">${product.oldPrice.toFixed()}</span>
                  )}</p>
                </div>
                <Button variant="secondary" className="add-to-cart-button">
                  Añadir al carrito
                </Button>                  
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
