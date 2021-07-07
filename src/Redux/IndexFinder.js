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
                let r = payload.Group.group.map(toPlay => toPlay.id === payload.id).indexOf(true);
                state.ClickedMusic = payload.id
                state.MusicGroup = payload.Group
                state.IndexOfMusic = r
            }
        },
        SkipPrev(state) {
            if (state.IndexOfMusic > 0) {
                let next = state.IndexOfMusic - 1
                state.IndexOfMusic = next
                state.ClickedMusic = state.MusicGroup.group[next].id
            }
        },
        SkipNext(state) {
            if (state.IndexOfMusic + 1 < state.MusicGroup.group.length) {
                let prev =state.IndexOfMusic + 1
                state.IndexOfMusic = prev
                state.ClickedMusic = state.MusicGroup.group[prev].id
            }
        },
        AutoPlay(state) {
            let change = !state.MusicGroup.isLoop
            state.MusicGroup.isLoop = change
        }

    }


})
export const { indexFind, SkipPrev, SkipNext, AutoPlay } = IndexSlice.actions;
export default IndexSlice.reducer;