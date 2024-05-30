import { createSlice } from "@reduxjs/toolkit";

const searchReducer = createSlice({
    name:'search',
    initialState:{
        search:""
    },
    reducers:{
        setSearch(state,action){
state.search= action.payload
        }
    }
})

export const {setSearch}= searchReducer.actions
export default searchReducer.reducer