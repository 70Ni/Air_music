const InitialState = {
    prevMusic: undefined,
    IndexOfMusic:undefined,
}

const musicGroupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_MUSIC_PLAYER':
            return Object.assign({}, state, { ...action.payload })
        case 'SET_NEXT_MUSIC':
            return Object.assign({}, state, { IndexOfMusic:state.IndexOfMusic+1 })
        default:
            return state;
    }
};

export default musicGroupReducer;