import { backendUrl } from "@/config";
import { AddProductProps, AsyncThunkConfig, ResponseProps } from "@/config/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    productList: []
};


export const addProduct = createAsyncThunk<ResponseProps, AddProductProps, AsyncThunkConfig>('/product/add',
    async (formdata, { rejectWithValue }) => {
        try {
            const response = await axios.post<ResponseProps>(
                `${backendUrl}/product/add`,
                formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            );
            return response.data;
        } catch (error: any) {
            // *Handle error and reject with a specific error message
            return rejectWithValue(error);
        }
    }
)


const AdminProductSlice = createSlice({
    name: "adminProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = action.payload.success;
        }).addCase(addProduct.rejected, (state) => {
            state.isLoading = false;
        })
    }
})



export default AdminProductSlice.reducer