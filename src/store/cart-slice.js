import { createSlice } from "@reduxjs/toolkit";


const cartInitialState = {
    totalQuantity : 0,
    amount : 0,
    totalFavorites: 0,
    totalAmount : 0,
    cart : [],
    heartArray : [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers : {
        addToCart(state, action){
            const pickedItem  = state.cart.find(elem=>elem.id === action.payload.items.id);
            console.log(pickedItem);
            if (pickedItem) {
                if (action.payload.type === "shoe"){
                    pickedItem.amount = pickedItem.amount + action.payload.items.amount;
                    state.totalAmount = state.totalAmount + action.payload.items.price * action.payload.items.amount
                } else if (action.payload.type === "cart"){
                    pickedItem.amount++;
                    state.totalAmount = state.totalAmount + action.payload.items.price
                }
            } else{
                state.totalQuantity++
                state.cart.push(action.payload.items)
                state.totalAmount = state.totalAmount + action.payload.items.price * action.payload.items.amount
            }
        },

        removeFromCart(state, action){
            console.log(action.payload.type);
            const pickedItem = state.cart.find((elem)=>elem.id === action.payload.id)
            if (action.payload.type === "cart") {
                if (pickedItem) {
                    pickedItem.amount--;
                    state.totalAmount = state.totalAmount - pickedItem.price;
                }  
            } else if (action.payload.type === "remove") {
                state.cart = state.cart.filter((elem)=>elem.id !== action.payload.id);
                state.totalAmount = state.totalAmount - pickedItem.price * pickedItem.amount
                state.totalQuantity--

            }
            return;      
            
        },
    
        addToFavorite(state, action){     
                if (action.payload.heartIsClicked) {
                    state.totalFavorites--
                    state.heartArray = state.heartArray.filter(elem=>elem.id !== action.payload.id);
                } else{
                    state.totalFavorites++
                    state.heartArray.push(action.payload);
                }
        },
        removeFromFav(state, action){
            console.log(action.payload);
            state.totalFavorites--
            state.heartArray = state.heartArray.filter(elem=>elem.id !== action.payload )
        },
        assignAmount(state,action){
            state.amount = action.payload;
        }
    }
})

export const cartActions  = cartSlice.actions;
export default cartSlice.reducer;