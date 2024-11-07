import { backendUrl } from "@/config";
import { AsyncThunkConfig, RegisterInputs, RegisterResponse, userSlicetype } from "@/config/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: userSlicetype = {
    isAuthenticated: false,
    isLoading: true,
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
        } catch (error: any) {
            // *Handle error and reject with a specific error message
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk<RegisterResponse, RegisterInputs, AsyncThunkConfig>('/auth/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post<RegisterResponse>(
                `${backendUrl}/auth/login`,
                formData,
                { withCredentials: true }
            );
            return response.data;
        } catch (error: any) {
            // *Handle error and reject with a specific error message
            return rejectWithValue(error);
        }
    }
)

export const checkUser = createAsyncThunk<RegisterResponse, null, AsyncThunkConfig>('/auth/check-user',
    async (_, { rejectWithValue }) => {

        try {
            const response = await axios.get<RegisterResponse>(
                `${backendUrl}/auth/check-auth`,
                { 
                    withCredentials: true,
                    headers: {
                       'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate',
                        'Expires': '0'
                    }

                }
            );
            return response.data;
        } catch (error: any) {
            // *Handle error and reject with a specific error message
            return rejectWithValue(error);
        }
    }
);

export const logoutUser = createAsyncThunk<null, null, AsyncThunkConfig>('/auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post<null>(
                `${backendUrl}/auth/logout`,
                {
                    withCredentials: true,
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate',
                        'Expires': '0'
                    }
                }
            );
            return response.data;
        } catch (error: any) {
            // *Handle error and reject with a specific error message
            return rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: () => {

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

            // * login function is called
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = action?.payload.success;
            state.user = action?.payload?.success ? action?.payload.user : null;

        }).addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;

            // * check if user is authenticated
        }).addCase(checkUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(checkUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = action?.payload.success;
            state.user = action?.payload?.success ? action?.payload.user : null;

        }).addCase(checkUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        
        // * logout function is called
        .addCase(
            logoutUser.fulfilled,
            (state) => {
                state.isAuthenticated = false;
                state.user = null;
            }
        );

    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;