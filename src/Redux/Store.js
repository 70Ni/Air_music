import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import indexReducer from './IndexFinder'

export default configureStore ({
    reducer : {
        MusicLoaded: indexReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})