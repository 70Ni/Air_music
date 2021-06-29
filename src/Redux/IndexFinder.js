import { createSlice } from "@reduxjs/toolkit";

import { PlayPause } from "../Container/FUNCTIONS";
// const MusicGroupSet = (state) => {
//     audio.src = state.MusicGroup[index].URL.default
//     console.log(state)
//     audio.play();
//     audio.onended = () => {
//         if (Store.getState().autoPlay.isAutoPlay) {
//             console.log("event completed")
//         }
//     }
// }
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
                let r = payload.Newarray.map(toPlay => toPlay.id === payload.id).indexOf(true);
                state.ClickedMusic = payload.id
                state.MusicGroup = payload.Newarray
                state.IndexOfMusic = r
            }
        },
        SkipPrev(state) {
            if (state.IndexOfMusic > 0) {
                state.IndexOfMusic = state.IndexOfMusic - 1
            }
        }

    }


})

export const { indexFind,SkipPrev } = IndexSlice.actions;
export default IndexSlice.reducer;