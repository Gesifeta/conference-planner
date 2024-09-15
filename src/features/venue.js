import { createSlice } from "@reduxjs/toolkit";

import { venue } from "../components/service";

//create venue slice

export const venueSlice = createSlice({
    name: "venue",
    initialState: {
        venue: venue,
    },
    reducers: {
        setVenue: (state, action) => {
            state.venue = action.payload
        }
    }
})