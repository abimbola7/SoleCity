import { createSlice } from "@reduxjs/toolkit";



const initialFavoriteState = {
    modalIsClicked : false,
}


const favoriteSlice  = createSlice({
    name: 'favorites',
    initialState : initialFavoriteState,
    reducers : {
        favoriteToggler(state){
            state.modalIsClicked = !state.modalIsClicked
        }
    } 
});

export const favoriteAction = favoriteSlice.actions;
export default favoriteSlice.reducer;