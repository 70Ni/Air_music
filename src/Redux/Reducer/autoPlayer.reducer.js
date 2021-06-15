const InitialState = {
    isAutoPlay: false,
}

const autoPlayReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_AUTO_PLAY':
            return {
                ...state,
                isAutoPlay: !state.isAutoPlay,
            }
        default:
            return state;
    }
};

export default autoPlayReducer;