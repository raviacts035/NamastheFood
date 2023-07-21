import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        items:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            const itemIndex=state.items.findIndex(item=>item.productId===action.payload?.productId);
            if (itemIndex>=0) {
                state.items[itemIndex].count+=1;
            }
            else {
                state.items.push(action.payload)
            }
        },
        clearWishlist:(state)=>{
            state.items=[]
        },
        removeFromWishlist:(state,action)=>{
            const inCartItems =  state.items.filter(
                item => state.items?.productId!==action.payload?.productId
            );
            state.items=inCartItems;
        },
    }
})

export const {addToWishlist,clearWishlist,removeFromWishlist} =wishlistSlice.actions;

export default wishlistSlice.reducer;