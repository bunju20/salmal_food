// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../google/dataSlice.js";

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});
