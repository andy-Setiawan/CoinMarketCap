import {combineReducers} from "redux"
import authReducer from "./AuthReducer"
import publicReducer from "./PublicReducer"

export default combineReducers({
    auth : authReducer,
    public : publicReducer
})