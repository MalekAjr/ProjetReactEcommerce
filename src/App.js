import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Cart from "./components/Cart";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Contact from "./components/Contact";
import LoginForm from "./components/Authentification/LoginForm ";
import SignupForm from "./components/Authentification/SignupForm";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar /> 
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;