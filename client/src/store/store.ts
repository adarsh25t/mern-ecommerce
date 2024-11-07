import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import adminProductSlice from "./admin/product-slice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        adminProducts: adminProductSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;