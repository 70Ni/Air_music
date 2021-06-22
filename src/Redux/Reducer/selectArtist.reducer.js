const InitialState = {
    artistName: '',
}

const selectArtistReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_ARTIST_ID':
            return {...state, artistName:action.payload }
        default:
            return state;
    }
};

export default selectArtistReducer;