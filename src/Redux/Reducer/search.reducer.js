const InitialState = {
    SearchResults: '',
}

const searchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SEARCH_MUSIC':
            return {...state, SearchResults:action.payload };
        default:
            return state;
    }
};

export default searchReducer;