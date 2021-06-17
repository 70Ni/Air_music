const InitialState = {

}

const searchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SEARCH_MUSIC':
            return Object.assign({}, state, { SearchResults: action.payload })
        default:
            return state;
    }
};

export default searchReducer;