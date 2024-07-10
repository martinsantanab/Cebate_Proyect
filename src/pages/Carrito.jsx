import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';


const Carrito = () => {
  const orders = [
    {
      id: 2,
      nombre: "Mate Acero Inoxidable Premium Negro [min. 15 unidades]",
      precio: 990,
      imagen: "public/images/mate.1.png",
      categoria: "Regalos Empresariales",
      cantidad: 1,
    },
  ];

  const [productos, setProductos] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);
  const [cupon, setCupon] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');

  useEffect(() => {
    setProductos(orders);
    actualizarTotales(orders, descuento);
  }, []);

  const actualizarTotales = (productos, descuento) => {
    const subtotal = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    const total = subtotal - descuento;
    setSubtotal(subtotal);
    setTotal(total);
  };

  const manejarCantidad = (id, cantidad) => {
    const nuevosProductos = productos.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + cantidad };
      }
      return producto;
    }).filter(producto => producto.cantidad > 0);
    setProductos(nuevosProductos);
    actualizarTotales(nuevosProductos, descuento);
  };

  const manejarCupon = () => {
    if (cupon === 'ANIMA') {
      const descuento = subtotal * 0.5;
      setDescuento(descuento);
      actualizarTotales(productos, descuento);
    } else {
      setDescuento(0);
      actualizarTotales(productos, 0);
    }
  };

  const deliveryOptions = [
    "Recogida en el local",
    "UES Estandar - 24 Horas: $ 190,00",
    "Entrega en Pick Up: $ 190,00",
    "Entrega Pick Up Interior - Xpres: $ 220,00",
    "UES 3 Dias - 72 Horas Interior: $ 220,00",
  ];

  return (
    <Container fluid className="mt-5 pt-5">
      <Row>
        <Col md={8} className="carrito">
          <h2>Carrito de Compras</h2>
          {productos.map((producto) => (
            <div key={producto.id} className="producto-carrito mb-3">
              <img src={producto.imagen} alt={producto.nombre} className="imagen-producto" />
              <div className="detalles-producto">
                <h5>{producto.nombre}</h5>
                <p>{producto.categoria}</p>
                <p>Precio: ${producto.precio}</p>
                <div className="cantidad-producto">
                  <Button
                    variant="outline-secondary"
                    className="btn-cantidad"
                    onClick={() => manejarCantidad(producto.id, -1)}
                  >
                    -
                  </Button>
                  <span>{producto.cantidad}</span>
                  <Button
                    variant="outline-secondary"
                    className="btn-cantidad"
                    onClick={() => manejarCantidad(producto.id, 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="btn-eliminar"
                    onClick={() => manejarCantidad(producto.id, -producto.cantidad)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Form inline className="form-cupon">
            <Form.Control
              type="text"
              placeholder="Cupón de descuento"
              value={cupon}
              onChange={(e) => setCupon(e.target.value)}
              className="input-cupon"
            />
            <Button onClick={manejarCupon} className="btn-aplicar-cupon">Aplicar</Button>
          </Form>
        </Col>
        <Col md={4} className="resumen">
          <h2>Resumen del Pedido</h2>
          <div className="resumen-detalle">
            <p>Subtotal: ${subtotal}</p>
            <p>Descuento: ${descuento}</p>
            <h5>Total: ${total}</h5>
          </div>
          <div className="delivery-options">
            <h4>Opciones de Envío</h4>
            {deliveryOptions.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                label={option}
                name="delivery"
                value={option}
                onChange={(e) => setSelectedDelivery(e.target.value)}
                checked={selectedDelivery === option}
                className="radio-delivery"
              />
            ))}
          </div>
          <Button className="btn-finalizar-compra">Finalizar Compra</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;
