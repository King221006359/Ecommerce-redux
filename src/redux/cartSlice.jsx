import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            cart: []
        },
        reducers: {
            addtocart: (state, action) =>{
                state.cart.push(action.payload)
            },
          removefromCart: (state, action) =>{
           state.cart= state.cart.filter(x => x.id !== action.payload.id)

          }
        }
})

export default cartSlice.reducer;
export const {addtocart, removefromCart} = cartSlice.actions;