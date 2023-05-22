import { createSlice } from "@reduxjs/toolkit";


const cartInitialState = {
    totalQuantity : 0,
    totalFavorites: 0,
    cart : [],
    heartArray : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers : {
        addToCart(state, action){
            state.totalQuantity++;
            console.log(action.payload.id);
            // state.cart.push(action.payload)
            const pickedItem  = state.cart.find(elem=>elem.id === action.payload.id);
            console.log(pickedItem);
            if (pickedItem) {
                pickedItem.amount++;
            } else{
                state.cart.push(action.payload)
            }
        },
        addToFavorite(state, action){     
            const favItem = state.cart.find(elem=>elem.id === action.payload.id);
            // if (favItem) {
            //     state.totalFavorites--;
            // } else{
                console.log(action.payload.id);
                if (action.payload.heartIsClicked) {
                    state.totalFavorites--
                    state.heartArray = state.heartArray.filter(elem=>elem.id !== action.payload.id);
                } else{
                    state.totalFavorites++
                    state.heartArray.push(action.payload);
                }
            // }
        },
        removeFromFav(state, action){
            console.log(action.payload);
            state.totalFavorites--
            // state.heartArray = state.heartArray.find((elem)=>elem.id === action.payload)
            state.heartArray = state.heartArray.filter(elem=>elem.id !== action.payload )
            // console.log(state.heartArray);
        }
    }
})

export const cartActions  = cartSlice.actions;
export default cartSlice.reducer;