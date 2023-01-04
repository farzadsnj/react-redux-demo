<<<<<<< HEAD
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const initialState = {
    loading: false,
    user: [],
    err: ''
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                user: action.payload,
                err:''
            }
        case FETCH_USER_FAILURE:
            return{
                loading: false,
                user: [],
                err: action.payload
            }
        default: return state
    }
}

=======
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const initialState = {
    loading: false,
    user: [],
    err: ''
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                user: action.payload,
                err:''
            }
        case FETCH_USER_FAILURE:
            return{
                loading: false,
                user: [],
                err: action.payload
            }
        default: return state
    }
}

>>>>>>> 7439dfe7c2468a723421522cda71625047c7e986
export default reducer