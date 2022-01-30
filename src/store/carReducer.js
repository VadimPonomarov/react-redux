import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carsService} from "../servises/cars.service";

export const getAll = createAsyncThunk(
    'cars/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const data = await carsService.getAll()
            return data
        } catch (e) {
            console.log('error')
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({id, data: newCar}, {dispatch}) => {
        try {
            const data = await carsService.create(newCar);
            dispatch(addCar({data}))
        } catch (e) {
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({id}, {dispatch}) => {
        try {
            await carsService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {

        }
    }
)


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: null,
        errors: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer;
const {addCar, deleteCar} = carSlice.actions;

export const carActions = {addCar, deleteCar};
export default carReducer;