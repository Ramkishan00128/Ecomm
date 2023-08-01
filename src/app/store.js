import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/Product-list/productSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlices";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
