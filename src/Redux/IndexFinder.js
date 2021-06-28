import { createSlice } from "@reduxjs/toolkit";

const IndexSlice = createSlice({
    name: 'IndexFinder',
    initialState: {
        ClickedMusic: '',
        IndexOfMusic: '',
        MusicGroup: '',
    },
    reducers: {
        indexFind(state, { payload }) {
            let r = payload.Newarray.map(toPlay => toPlay.id === payload.id).indexOf(true);
            state.ClickedMusic = payload.id
            state.MusicGroup = payload.Newarray
            state.IndexOfMusic = r
        },
    }
})

export const { indexFind } = IndexSlice.actions;
export default IndexSlice.reducer;
