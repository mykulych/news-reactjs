import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api";


export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(newsApi.middleware)
})