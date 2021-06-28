import { createSlice } from "@reduxjs/toolkit"



const autoSlice = createSlice({
    name: 'autoPlay',
    initialState: {
        isAutoPlay: false,
    },
    reducers: {
        autoEnable(state, { payload }) {
            return Object.assign({}, state, { isAutoPlay: !state.isAutoPlay })
        }
    }
})

export const { autoEnable } = autoSlice.actions;
export default autoSlice.reducers;