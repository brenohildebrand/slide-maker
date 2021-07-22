import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import localStorage from "../features/storage/storageAPI"

const preloadedState = {
    slides: localStorage.getItem("slides") ?? undefined,
};

const store = configureStore({
    reducer: RootReducer, 
    preloadedState,
});

export default store;