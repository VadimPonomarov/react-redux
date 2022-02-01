import {combineReducers} from "@reduxjs/toolkit";

import carReduser from './reducers/carReducer'
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";

const rootReducer = combineReducers({
    cars: carReduser,
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
})

export default rootReducer;