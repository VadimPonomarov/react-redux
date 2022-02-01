import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {usersService} from "../servises/users.service";

export const getAll = createAsyncThunk(
    'users/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const data = await usersService.getAll()
            return data
        } catch (e) {
            console.log('error')
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        current: null,
        status: null,
        errors: null
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload.data)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.users = state.users.map(user => {
                return (user.id === action.payload.data.id) ? action.payload.data : user
            })
        },
        setCurrent: (state, action) => {
            state.current = action.payload.id
        },
        clearCurrent: (state, action) => {
            state.current = null
        },
        setChecked: (state, action) => {
            state.users = state.users.map(user => {
                return (user.id === action.payload.data.id) ? {...user, checked: action.payload.data.checked} : user
            })
            console.log(state.users)
        },
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.users = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const userReducer = userSlice.reducer;
const {addUser, deleteUser, updateUser, setCurrent, clearCurrent, setChecked} = userSlice.actions;

export const userActions = {addUser, deleteUser, updateUser, setCurrent, clearCurrent, setChecked};
export default userReducer;