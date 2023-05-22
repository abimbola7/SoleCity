import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import favoriteSlice from "./favorite-slice";
import cartSlice from "./cart-slice";
import shoeSlice from "./shoe-slice";
import apiSlice from "./api-slice";

const store = configureStore({
    reducer: { 
        ui : uiSlice, 
        cart: cartSlice, 
        favorites: favoriteSlice,
        shoe: shoeSlice,
        api : apiSlice
    }
})

export default store;