import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {commentsService} from "../../servises/comments.service";

export const getAll = createAsyncThunk(
    'comments/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const data = await commentsService.getAll()
            return data
        } catch (e) {
            console.log('error')
            return rejectWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        current: null,
        status: null,
        errors: null
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload.data)
        },
        deleteComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
        },
        updateComment: (state, action) => {
            state.comments = state.comments.map(comment => {
                return (comment.id === action.payload.data.id) ? action.payload.data : comment
            })
        },
        setCurrent: (state, action) => {
            state.current = action.payload.id
        },
        clearCurrent: (state, action) => {
            state.current = null
        },
        setChecked: (state, action) => {
            state.comments = state.comments.map(comment => {
                return (comment.id === action.payload.data.id) ? {...comment, checked: action.payload.data.checked} : comment
            })
            console.log(state.comments)
        },
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.comments = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer;
const {addComment, deleteComment, updateComment, setCurrent, clearCurrent, setChecked} = commentSlice.actions;

export const commentActions = {addComment, deleteComment, updateComment, setCurrent, clearCurrent, setChecked};
export default commentReducer;