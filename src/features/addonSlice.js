import { createSlice } from "@reduxjs/toolkit";

//create a addon slice
export const addonSlice = createSlice({
    name: "addon",
    initialState: {
        addon: null
    },
    reducers: {
        setAddon: (state, action) => {
            state.addon = action.payload
        }
    }
})