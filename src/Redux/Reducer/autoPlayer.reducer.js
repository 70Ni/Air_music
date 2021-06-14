const InitialState = {
    isAutoPlay: false,
    PageId: undefined,
}

const autoPlayReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_AUTO_PLAY':
            return {
                ...state,
                isAutoPlay: !state.isAutoPlay,
                PageId:action.payload,
            }
        default:
            return state;
    }
};

export default autoPlayReducer;