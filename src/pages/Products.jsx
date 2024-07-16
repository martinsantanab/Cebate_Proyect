import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Destacados from "../components/Destacados";
export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error obteniendo las categorias:", error);
      }
    };

    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");

        const parsedProducts = response.data.map((product) => ({
          ...product,
          picture: JSON.parse(product.picture),
        }));
        setProducts(parsedProducts);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      }
    };

    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    document.title = "Productos | cebate - La Marca del Mate";
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOption) {
      case "priceLowToHigh":
        updatedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price) //Tuve que usar esto ya que el precio en la base esta manejado con string para que quede ej 990,00 .
        ); //Lo que hace es pasarlo a numerico float (porque pueden haber con coma) y los compara
        break;
      case "priceHighToLow":
        updatedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "alphabetical":
        updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "latest":
        updatedProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, sortOption, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
            onChange={handleSearchChange}
          />
        </div>
        <div className="sort-container">
          <Form.Control
            as="select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Orden predeterminado</option>
            <option value="priceLowToHigh">
              Ordenar por price: bajo a alto
            </option>
            <option value="priceHighToLow">
              Ordenar por price: alto a bajo
            </option>
            <option value="alphabetical">Ordenar alfabeticamente</option>
            <option value="latest">Ordenar por los últimos</option>
          </Form.Control>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <p className="results">
              MOSTRANDO LOS {filteredProducts.length} RESULTADOS
            </p>
          </Col>
        </Row>
        <Row>
        <Destacados />
          {filteredProducts.map((product) => (
            <Col md={3} key={product.id} className="trending-product mb-4">
              <div className="product-container">
                <div className="product-image-container">
                  {product.stock === 0 && (
                    <div className="badge-stock">Agotado</div>
                  )}
                  {product.onSale && <div className="badge-sale">OFERTA</div>}
                  <img
                    src={product.picture[0].url}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="price-info"></div>
                  <p>${product.price} </p>
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
