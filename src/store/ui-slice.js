import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    hamburgerIsToggled : false,
    heartToggle: false
}

const uiSlice = createSlice({
    name : "ui",
    initialState : initialUiState,
    reducers : {
        hamburgerToggler(state){
            state.hamburgerIsToggled = !state.hamburgerIsToggled;
        },
        heartToggler(state, payload){
            state.heartToggle = !state.heartToggle;
        }

    }
})

export const toggleActions = uiSlice.actions;
export default uiSlice.reducer;