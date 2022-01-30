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
    async ({id, data: newCar}) => {
        try {
            const data = await carsService.create(newCar);
        } catch (e) {
        }
    }
)

export const updateCarAsync = createAsyncThunk(
    'cars/updateCar',
    async ({id, data: car}) => {
        try {
            const data = await carsService.update(car);
        } catch (e) {
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({id}) => {
        try {
            await carsService.deleteById(id);
        } catch (e) {

        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        current: null,
        status: null,
        errors: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.cars = state.cars.map(car => {
                return (car.id === action.payload.data.id) ? action.payload.data : car
            })
        },
        setCurrent: (state, action) => {
            state.current = action.payload.id
        },
        clearCurrent: (state, action) => {
            state.current = null
        },
        setChecked: (state, action) => {
            state.cars = state.cars.map(car => {
                return (car.id === action.payload.data.id) ? {...car, checked: action.payload.data.checked} : car
            })
            console.log(state.cars)
        },
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
const {addCar, deleteCar, setCurrent, clearCurrent, updateCar, setChecked} = carSlice.actions;

export const carActions = {addCar, deleteCar, setCurrent, clearCurrent, updateCar, setChecked};
export default carReducer;