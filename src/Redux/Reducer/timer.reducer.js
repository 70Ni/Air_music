const InitialState = {
    hll:"jjjoj"
}

const timerSetReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_TIMER':
            return Object.assign({}, state, {...action.payload})
            default:
            return state;
    }
};

export default timerSetReducer;