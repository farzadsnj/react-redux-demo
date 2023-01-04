<<<<<<< HEAD
import { combineReducers } from 'redux'
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})

=======
import { combineReducers } from 'redux'
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default rootReducer