import { createSlice } from "@reduxjs/toolkit"



const selectSlice = createSlice({
    name: 'selectArtist',
    initialState: {
        artistName: 'Hello',
    },
    reducers: {
        artistId(state, { payload }) {
            state.artistName = payload
        }
    }
})

export const { artistId } = selectSlice.actions;
export default selectSlice.reducers;