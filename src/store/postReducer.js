import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {postsService} from "../servises/posts.service";

export const getAll = createAsyncThunk(
    'posts/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const data = await postsService.getAll()
            return data
        } catch (e) {
            console.log('error')
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        current: null,
        status: null,
        errors: null
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload.data)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map(post => {
                return (post.id === action.payload.data.id) ? action.payload.data : post
            })
        },
        setCurrent: (state, action) => {
            state.current = action.payload.id
        },
        clearCurrent: (state, action) => {
            state.current = null
        },
        setChecked: (state, action) => {
            state.posts = state.posts.map(post => {
                return (post.id === action.payload.data.id) ? {...post, checked: action.payload.data.checked} : post
            })
            console.log(state.posts)
        },
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.posts = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postReducer = postSlice.reducer;
const {addPost, deletePost, updatePost, setCurrent, clearCurrent, setChecked} = postSlice.actions;

export const postActions = {addPost, deletePost, updatePost, setCurrent, clearCurrent, setChecked};
export default postReducer;