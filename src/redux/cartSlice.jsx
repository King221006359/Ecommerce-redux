import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            cart: []
        },
        reducers: {
            addtocart: (state, action) =>{
                state.cart.push(action.payload)
            }

        }
})

export default cartSlice.reducer;
export const {addtocart} = cartSlice.actions;