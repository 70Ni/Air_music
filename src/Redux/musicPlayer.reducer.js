const InitialState = {
    prevMusic: undefined,
}

const musicGroupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_MUSIC_PLAYER':
            return Object.assign({}, state, {...action.payload})
            default:
            return state;
    }
};

export default musicGroupReducer;