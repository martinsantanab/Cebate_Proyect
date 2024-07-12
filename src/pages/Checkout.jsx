import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "card-validator";

const Checkout = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [cardType, setCardType] = useState("");
  const [cardColor, setCardColor] = useState("#FFFFFF");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Limitar cantidad de caracteres según el campo
    if (name === "cardNumber" && updatedValue.length > 16) return;
    if (name === "expiryDate" && updatedValue.length > 7) return; // MM/AAAA
    if (name === "cvv" && updatedValue.length > 3) return;

    // Validar datos de tarjeta usando card-validator
    if (name === "cardNumber") {
      const cardNumberValidation = validator.number(updatedValue);
      if (cardNumberValidation.isValid) {
        setCardType(cardNumberValidation.card.type);
        setCardColor(
          cardNumberValidation.card.type === "american-express"
            ? "#0080ff"
            : "#333333"
        );
      } else {
        setCardType("");
        setCardColor("#FFFFFF");
      }
      updatedValue = updatedValue.replace(/[^\d]/g, ""); // Solo números
    }

    // Formato para la fecha de vencimiento MM/AAAA
    if (name === "expiryDate") {
      updatedValue = updatedValue.replace(/[^\d]/g, "");
      if (updatedValue.length > 2) {
        updatedValue = `${updatedValue.slice(0, 2)}/${updatedValue.slice(2)}`;
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  return (
    <div className="container">
      <div className="checkout-container">
        <div className="row">
          <div className="col-md-6">
            <h2>Checkout</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardName" className="form-label">
                  Nombre en la Tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">
                  Fecha de Vencimiento
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/AAAA"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="3"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Confirmar Pago
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div
              className="card mt-3 p-3 checkout-card"
              style={{ backgroundColor: cardColor }}
            >
              <h5 className="card-title">Simulación de Tarjeta</h5>
              <div className="card-body">
                <div className="card-chip"></div>
                <div className="card-number">
                  {formData.cardNumber
                    ? formData.cardNumber
                        .padEnd(16, "*")
                        .match(/.{1,4}/g)
                        .join(" ")
                    : "XXXX XXXX XXXX XXXX"}
                </div>
                <div className="card-info">
                  <div className="card-info-row">
                    <span className="card-info-label">Titular:</span>{" "}
                    {formData.cardName || "Nombre Apellido"}
                  </div>
                  <div className="card-info-row">
                    <span className="card-info-label">Válido hasta:</span>{" "}
                    {formData.expiryDate || "MM/AAAA"}
                  </div>
                </div>
                {cardType && (
                  <div className="card-logo">
                    <img
                      src={`/images/${cardType}.png`}
                      alt={`${cardType} logo`}
                      style={{ width: "50px", height: "30px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
