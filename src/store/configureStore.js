import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currency from "./currency";
import modal from "./modal";
import products from "./products";

const reducer = combineReducers({ modal, products, currency });
const store = configureStore({ reducer });

export default store;
