import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Clothes from "../Categories/Clothes";
import Tech from "../Categories/Tech"
import CategoriesNav from "../CategoriesNav/CategoriesNav";



export default class Products extends Component {
  

  render() {
    return (
      <section style={{
        margin: "5rem auto",
        padding: "150px 150px 0",
      }}>
        <h1>Header</h1>
        <CategoriesNav />
        <Routes>
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </section>
    );
  }
}
