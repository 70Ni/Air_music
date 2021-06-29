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
        AudioDuration: '',
        currentTime: '',
        cursecs: '',
        curmins: '',
        durmins: '',
        dursecs: '',

    },
    reducers: {
        TimerUpdates(state, { payload }) {
            state.AudioDuration = payload.AudioDuration
            state.currentTime = payload.currentTime
            state.cursecs = payload.cursecs
            state.curmins = payload.curmins
            state.durmins = payload.durmins
            state.dursecs = payload.dursecs

        }

    }


})

export const { TimerUpdates } = TimeSlice.actions;
export default TimeSlice.reducer;