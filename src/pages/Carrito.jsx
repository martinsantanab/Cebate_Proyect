import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrito = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Mate Acero inoxidable Premium [Negro]",
      precio: 990.0,
      cantidad: 1,
      imagen: "/images/mate.1.png", // Ajustado a la ruta relativa esperada
    },
  ]);
  const [cupon, setCupon] = useState("");
  const [envio, setEnvio] = useState(0);

  const aplicarCupon = () => {
    if (cupon === "DESCUENTO10") {
      const descuento = 0.1; // 10% de descuento
      setProductos(
        productos.map((p) => ({ ...p, precio: p.precio * (1 - descuento) }))
      );
    } else if (cupon === "ANIMA") {
      setProductos(productos.map((p) => ({ ...p, precio: p.precio * 0.5 })));
    }
  };

  const actualizarCantidad = (id, delta) => {
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p
      )
    );
  };

  const calcularSubtotal = () => {
    return productos
      .reduce((total, p) => total + p.precio * p.cantidad, 0)
      .toFixed(2);
  };

  const manejarCambioEnvio = (costoEnvio) => {
    setEnvio(costoEnvio);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const subtotal = calcularSubtotal();
  const total = (parseFloat(subtotal) + parseFloat(envio)).toFixed(2);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h4 className="carrito-titulo">Carrito de compras</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="carrito-subtitulo">Producto</th>
                  <th className="carrito-subtitulo">Cantidad</th>
                  <th className="carrito-subtitulo">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="img-fluid" // Clase de Bootstrap para imágenes responsive
                        width="100"
                      />
                      <span>{producto.nombre}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => actualizarCantidad(producto.id, -1)}
                          className="btn btn-light"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={producto.cantidad}
                          readOnly
                          className="form-control text-center mx-2"
                          style={{ width: "50px" }}
                        />
                        <button
                          onClick={() => actualizarCantidad(producto.id, 1)}
                          className="btn btn-light"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(producto.precio * producto.cantidad).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => eliminarProducto(producto.id)}
                        className="btn btn-link text-danger"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Código del cupón"
              value={cupon}
              onChange={(e) => setCupon(e.target.value)}
            />
            <button className="btn btn-primary" onClick={aplicarCupon}>
              Aplicar el cupón
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border p-3 carrito-resumen">
            <h4 className="carrito-titulo">Totales del carrito</h4>
            <p className="carrito-subtotal">Subtotal: ${subtotal}</p>
            <h5 className="carrito-subtitulo">Envío</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id="recogida"
                value="0"
                onChange={() => manejarCambioEnvio(0)}
              />
              <label className="form-check-label" htmlFor="recogida">
                Recogida local
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id="estandar"
                value="190"
                onChange={() => manejarCambioEnvio(190)}
              />
              <label className="form-check-label" htmlFor="estandar">
                UES Estandar - 24 Horas: $ 190,00
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id="pickup"
                value="190"
                onChange={() => manejarCambioEnvio(190)}
              />
              <label className="form-check-label" htmlFor="pickup">
                Entrega en Pick Up: $ 190,00
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id="xpres"
                value="220"
                onChange={() => manejarCambioEnvio(220)}
              />
              <label className="form-check-label" htmlFor="xpres">
                Entrega Pick Up Interior - Xpres: $ 220,00
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id="3dias"
                value="220"
                onChange={() => manejarCambioEnvio(220)}
              />
              <label className="form-check-label" htmlFor="3dias">
                UES 3 Dias - 72 Horas Interior: $ 220,00
              </label>
            </div>
            <p className="carrito-info">
              Las opciones de envío se actualizarán durante el pago.
            </p>
            <h5 className="carrito-total">Total: ${total}</h5>
            <a
              href="http://localhost:5173/Checkout"
              className="btn btn-primary w-100 mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Finalizar compra
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
