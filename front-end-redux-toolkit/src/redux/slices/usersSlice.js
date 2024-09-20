import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const response = await axios.get('http://localhost:8080/users/all')
        return response.data
    }
)

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id, thunkAPI) => {
        const response = await axios.post(`http://localhost:8080/users/delete/${id}`)
        thunkAPI.dispatch(fetchAllUsers())
        return response.data
    }
)

export const createNewUser = createAsyncThunk(
    'users/createNewUser',
    async (data, thunkAPI) => {
        const response = await axios.post(`http://localhost:8080/users/create`, {...data})
        thunkAPI.dispatch(fetchAllUsers())
        return response.data
    }
)

const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload
                state.isLoading = false
                state.isError = false
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isError = true  
            })
            .addCase(createNewUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isError = true  
            })
    }
})

export default usersSlice.reducer