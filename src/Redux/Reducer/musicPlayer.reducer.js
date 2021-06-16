const InitialState = {
    prevMusic: undefined,
    IndexOfMusic:undefined, // remove this 
    MusicHistory:[],
}

const musicGroupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_MUSIC_PLAYER':
            state.prevMusic = action.payload.prevMusic
            let History = state.MusicHistory.push(action.payload.prevMusic);
            state.MusicHistory.push(History)
            return Object.assign({}, state, { CurrentGroup:action.payload })
        case 'SET_NEXT_MUSIC':
            return Object.assign({}, state, { IndexOfMusic:state.IndexOfMusic+1 })
        default:
            return state;
    }
};

export default musicGroupReducer;