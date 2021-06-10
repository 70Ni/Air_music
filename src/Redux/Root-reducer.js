import {combineReducers} from 'redux'
import musicGroupReducer from './musicPlayer.reducer'

export default combineReducers({
    player:musicGroupReducer
});