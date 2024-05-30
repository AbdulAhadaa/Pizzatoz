import {  createSlice } from "@reduxjs/toolkit";

const categoryReducer= createSlice({
    name:"category",
    initialState:{
        category:"All"
    },
    reducers:{
        setcategory:(state,action)=>{
            state.category= action.payload
        }
    }
})

export const {setcategory} = categoryReducer.actions
export default categoryReducer.reducer