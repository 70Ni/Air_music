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
const sRedSlice = createSlice({
    name: 'sRedSlice',
    initialState: {

    },
    reducers: {
        adder(state, { payload }) {
            state.there = payload
        }

    }


})

export const { adder } = sRedSlice.actions;
export default sRedSlice.reducer;