import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[]
}

const userInitState: UserSliceType = {
    users: []
}

/***********************************   loadUsers   ***********************************/

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (arg, thunkAPI) => {

        try {
            const users = await userService.getAll();
            // console.log(users)
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)

/***********************************   userSlice   ***********************************/

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //....
            })
});

export const userActions = {...userSlice.actions, loadUsers}