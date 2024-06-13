import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../../services/api.service";
import {AxiosError} from "axios";

type CommentSliceType = {
    comments: IComment[] | null
}

const commentInitState: CommentSliceType = {
    comments: []
}

/***********************************   loadCommentsByPostId   ***********************************/

const loadCommentsByPostId = createAsyncThunk(
    'commentSlice/loadCommentsByPostId',
    async (id: string | undefined, thunkAPI) => {

        if (id) {
            try {
                const commentsOfPost = await commentService.getByPostId(id);
                return thunkAPI.fulfillWithValue(commentsOfPost)
            } catch (e) {
                const error = e as AxiosError
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    }
);


/***********************************   commentSlice   ***********************************/

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadCommentsByPostId.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            // .addCase(loadCommentsByPostId.rejected,(state, action) => {
            //
            // })

})

export const commentActions = {
    ...commentSlice.actions,
    loadCommentsByPostId
}