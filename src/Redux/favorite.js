import { createSlice } from "@reduxjs/toolkit";

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
const FavoriteSlice = createSlice({
    name: 'FavArray',
    initialState: [],
    reducers: {

        isFavorite(state, { payload }) {
            let r = state.map(like => like == payload).indexOf(true);
            console.log(r)

            if (r >= 0) {
                state = state.splice(r, 1);
            } else {
                state.push(payload)
            }

        },

    }


})

export const { isFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;