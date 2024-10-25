"use client"
import {configureStore} from "@reduxjs/toolkit";
import viewPortReducer from "./slice/viewPortSlice";


const store = configureStore({
    reducer:{
        viewport:viewPortReducer,
    },
    devTools:true,
});

export default store;
