import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import indexReducer from './IndexFinder'
import TimerUpdates  from './TimeUpdater'
import FavoriteSlice from './favorite'
import search from './search'
export default configureStore ({
    reducer : {
        MusicLoaded: indexReducer,
        SongDuration: TimerUpdates,
        favorite:FavoriteSlice,
        searchCard: search
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})