const InitialState = {
    favArray:[10]
}

const favoriteReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            console.log(action.payload)
            return {
                ...state,
                favArray:[...action.payload]
            }
        // case 'RESET_FAVORITE':
        //     return {
        //         ...state,
        //         arr: [...state.FavArray, action.payload]
        //     }
        default:
            return state;
    }
};

export default favoriteReducer;