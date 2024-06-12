import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    user: IUser | null
}

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    user: null
}

/***********************************   loadUsers   ***********************************/

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (arg, thunkAPI) => {

        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.isLoaded(true))
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)

/***********************************   loadUserById   ***********************************/

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {

        if (id) {
            try {
                const user = await userService.getById(id);
                return thunkAPI.fulfillWithValue(user)
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    }
)

/***********************************   userSlice   ***********************************/

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        isLoaded: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            // .addCase(loadUsers.rejected, (state, action) => {
            //
            // })
            // .addMatcher(isFulfilled(loadUsers), (state, action) => {
            //     // state.isLoaded = true
            // })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}