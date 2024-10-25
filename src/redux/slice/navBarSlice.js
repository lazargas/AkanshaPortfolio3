import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
    name:"navbar",
    initialState:false,
    reducers:{
        toggleNavBar: (state,action)=>{
            return !state;
        },
    }
})

export const selectNavBarToggle = (state) => state.navbar;

export const { toggleNavBar } = navBarSlice.actions;

export default navBarSlice.reducer;