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
            if (state.ClickedMusic !== payload.id) {
                let r = payload.newArray.map(toPlay => toPlay.id === payload.id).indexOf(true);
                state.ClickedMusic = payload.id
                state.MusicGroup = payload.newArray
                state.IndexOfMusic = r
            }
        },
        SkipPrev(state) {
            if (state.IndexOfMusic > 1) {
                state.IndexOfMusic -= 1
            }
        },
        SkipNext(state) {
            if (state.IndexOfMusic + 1 < state.MusicGroup.length) {
                state.IndexOfMusic += 1
            }
        },
        AutoPlay(state) {
            let change = !state.MusicGroup[0].isLoop
            state.MusicGroup[0].isLoop = change
        }

    }


})
export const { indexFind, SkipPrev, SkipNext, AutoPlay } = IndexSlice.actions;
export default IndexSlice.reducer;