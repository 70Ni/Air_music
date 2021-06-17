const InitialState = {
    prevMusic: undefined,
    MusicHistory: [],
    CurrentGroup: undefined
}

const musicGroupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_MUSIC_PLAYER':
            state.prevMusic = action.payload.prevMusic
            let History = state.MusicHistory.push(action.payload.prevMusic);
            state.MusicHistory.push(History)
            return Object.assign({}, state, { CurrentGroup: action.payload })
        default:
            return state;
    }
};

export default musicGroupReducer;