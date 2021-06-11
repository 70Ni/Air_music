const timerState = {
    
}

const timerSetReducer = (state = timerState, action) => {
    switch (action.type) {
        case 'SET_TIMER':
            return Object.assign({}, state, {...action.payload})
            default:
            return state;
    }
};

export default timerSetReducer;