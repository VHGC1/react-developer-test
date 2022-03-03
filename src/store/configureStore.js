import { combineReducers, configureStore } from "@reduxjs/toolkit";
import category from "./category";
import currency from "./currency";
import modal from "./modal";
import products from "./products";

const reducer = combineReducers({ modal, products, currency, category });
const store = configureStore({ reducer });

export default store;
