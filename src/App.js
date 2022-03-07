import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ProductPage from "./Components/ProductPage/ProductPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
