import { combineReducers } from 'redux'
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})

export default rootReducer