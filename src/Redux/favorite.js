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
    initialState: {
        id:[],
        name:[],
        notify:0
    },
    reducers: {
        isFavorite(state, { payload }) {
            let r = state.id.map(like => like === payload.id).indexOf(true);
            if (r !==  -1 ) {
                state.id.splice(r, 1);
                state.name.splice(r, 1);
                state.notify = state.notify -= 1
            } else {
                state.id.unshift(payload.id)
                state.name.unshift(payload.name)
                state.notify = state.notify += 1
            }

        },
        isNoticed(state, {payload}) {
            state.notify = 0
        }

    }


})

export const { isFavorite,isNoticed } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;