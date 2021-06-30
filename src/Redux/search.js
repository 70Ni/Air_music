import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name: 'search',
    initialState:{ 
        searchCard:''
    },
    reducers: {

        Searching(state, { payload }) {
            state.searchCard = payload
        },

    }


})

export const { Searching } = searchSlice.actions;
export default searchSlice.reducer;