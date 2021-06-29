import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import indexReducer from './IndexFinder'
import Sredux from './Sredux'
import TimerUpdates  from './TimeUpdater'
import FavoriteSlice from './favorite'
export default configureStore ({
    reducer : {
        MusicLoaded: indexReducer,
        SongDuration: TimerUpdates,
        favorite:FavoriteSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})