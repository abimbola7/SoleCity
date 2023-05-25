import { createSlice } from "@reduxjs/toolkit";
import { apiActions } from "./api-slice";


const initialShoeState = {
    shoe : [],
    shoeItem : {}
}

const shoeSlice = createSlice({
    name: "shoe",
    initialState : initialShoeState,
    reducers : {
        toggleHeartIcon(state, action){
            const pickedItem = state.shoe.find((elem)=>elem.id === action.payload);
            console.log(pickedItem);
            pickedItem.heartIsClicked = !pickedItem.heartIsClicked
        },
        toggleHeartIconBack(state, action){
            const pickedItem = state.shoe.find((elem)=>elem.id === action.payload);
            console.log(pickedItem);
        },
        replace(state, action){
            state.shoe = action.payload;
            console.log(state);
        },
        shoeItem(state, action){
            state.shoeItem = action.payload
        }
    }
})

export const fetchShoeData = () => {
        return async (dispatch) => {
            const fetchData = async () => {
                dispatch(apiActions.showNotification(false));
                const response = await fetch('https://solecity-8f055-default-rtdb.firebaseio.com/shoes.json')
                if (!response.ok) {
                    throw new Error("failed to fetch data")
                } else {
                    const data = await response.json();
                    console.log(data)
                    return data;
                }
            }
            try{
                const shoeData = await fetchData();
                dispatch(apiActions.showNotification(true))
                dispatch(shoeAction.replace(shoeData || []))
            } catch(error){
                console.log(error.message);
                dispatch(apiActions.error(true))
            }
        }
}
export const fetchShoeItem = (quoteId) => {
        return async (dispatch) => {
            const fetchData = async () => {
                dispatch(apiActions.showNotification(false));
                const response = await fetch(`https://solecity-8f055-default-rtdb.firebaseio.com/shoes/${quoteId-1}.json`)
                if (!response.ok) {
                    throw new Error("failed to fetch data")
                } else {
                    const data = await response.json();
                    console.log(data)
                    return data;
                }
            }
            try{
                const shoeData = await fetchData();
                dispatch(apiActions.showNotification(true))
                dispatch(shoeAction.shoeItem(shoeData))
                console.log(shoeData);
            } catch(error){
                console.log(error.message);
                dispatch(apiActions.error(true))
            }
        }
}

export const shoeAction = shoeSlice.actions;
export default shoeSlice.reducer;