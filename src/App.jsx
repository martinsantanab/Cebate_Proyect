import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Carrito from './pages/Carrito';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre-Nosotros" element={<AboutUs />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/Productos" element={<Products />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
