import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import cakeReducer from './cakes/CakeReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
