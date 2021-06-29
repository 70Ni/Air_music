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
const TimeSlice = createSlice({
    name: 'TimeUpdater',
    initialState: {

    },
    reducers: {
        TimerUpdates(state, { payload }) {
            state.Durations = payload
        }

    }


})

export const { TimerUpdates } = TimeSlice.actions;
export default TimeSlice.reducer;