import { createSlice } from "@reduxjs/toolkit"



const selectSlice = createSlice({
    name: 'ArtistSelect',
    initialState: {
        artistName: '',
    },
    reducers: {
        artistId(state, { payload }) {
            state.artistName = payload
        }
    }
})

export const { artistId } = selectSlice.actions;
export default selectSlice.reducer;