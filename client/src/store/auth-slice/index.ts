import { backendUrl } from "@/config";
import { AsyncThunkConfig, RegisterInputs, RegisterResponse } from "@/config/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export const registerUser = createAsyncThunk<RegisterResponse, RegisterInputs, AsyncThunkConfig>('/auth/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post<RegisterResponse>(
                `${backendUrl}/auth/register`,
                formData,
                { withCredentials: true }
            );
            return response.data;
        } catch (error) {
            // Handle error and reject with a specific error message
            return rejectWithValue('Failed to register user');
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state) => {

            state.isLoading = false;
            // * after login only change isAuthenticated true 
            state.isAuthenticated = false;
            state.user = null;
        }).addCase(registerUser.rejected, (state) => {

            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;