import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: 'cart',
    initialState:{cart:[]},
    reducers:{
        add(state,action){
           
            const existingitem = state.cart.find((item)=>  item.id === action.payload.id)
            if(existingitem){
                state.cart = state.cart.map(product=>product.id===action.payload.id ? {...product,qty: product.qty+1}: product
                 )
            }
            else{
                state.cart.push(action.payload)
            }
          
        },
        remove(state,action){
            state.cart= state.cart.filter((items)=>{
                return items.id!==action.payload
            })
        },
        increment(state,action){
state.cart = state.cart.map(product=> product.id === action.payload.id? {...product,qty: product.qty+1} :product)
        },
        decrement(state,action){
            state.cart = state.cart.map(product=> product.id === action.payload.id? {...product,qty: product.qty-1} :product)
        }
        

    }
})

export const {add,remove,increment,decrement} = cartReducer.actions
export default cartReducer.reducer
