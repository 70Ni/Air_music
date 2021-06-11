import {combineReducers} from 'redux'
import musicGroupReducer from './Reducer/musicPlayer.reducer';
import timerSetReducer from './Reducer/musicPlayer.reducer';

export default combineReducers({
    player:musicGroupReducer,
    timer:timerSetReducer
});