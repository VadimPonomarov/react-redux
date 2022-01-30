import {combineReducers} from "@reduxjs/toolkit";

import carReduser from './carReducer'

const rootReducer = combineReducers({
    cars: carReduser
})

export default rootReducer;