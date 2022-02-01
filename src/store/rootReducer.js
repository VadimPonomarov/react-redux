import {combineReducers} from "@reduxjs/toolkit";

import carReduser from './carReducer'
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    cars: carReduser,
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
})

export default rootReducer;