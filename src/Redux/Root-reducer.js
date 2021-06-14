import {combineReducers} from 'redux'
import autoPlayReducer from './Reducer/autoPlayer.reducer';
import musicGroupReducer from './Reducer/musicPlayer.reducer';
import timerSetReducer from './Reducer/timer.reducer';

export default combineReducers({
    player:musicGroupReducer,
    timer:timerSetReducer,
    autoPlay: autoPlayReducer
});