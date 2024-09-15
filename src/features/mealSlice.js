import { createSlice } from "@reduxjs/toolkit";

//create a meal slice
export const mealSlice = createSlice({
    name: "meal",
    initialState: {
        meal: null
    },
    reducers: {
        setMeal: (state, action) => {
            state.meal = action.payload
        }
    }
})