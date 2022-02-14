import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import products from "./products";

const reducer = combineReducers({ modal, products });
const store = configureStore({ reducer });

export default store;
