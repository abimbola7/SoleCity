import { createSlice } from "@reduxjs/toolkit";


const initialApiState = {
    notification : false,
    error : null
}

const apiSlice = createSlice({
    name: "api",
    initialState : initialApiState,
    reducers : {
        showNotification(state, action){
            state.notification = action.payload;
        },
        error(state, action){
            state.error = action.payload;
        }
    }
})


export default apiSlice.reducer;
export const apiActions = apiSlice.actions;