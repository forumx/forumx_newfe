"use client";

import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "@/redux/slices/comment";
import {accountSlice} from "@/redux/slices/account";

export const store = configureStore({
	reducer: {
		comment: commentSlice.reducer,
		account: accountSlice.reducer,
	},
	devTools: process.browser,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
