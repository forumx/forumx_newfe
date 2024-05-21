
import {createSlice} from '@reduxjs/toolkit';

const initialState= {
	token: "",
	user: {
		id: 0,
		username: "",
		name: "",
		enabled: true,
		img_url: ""
	}
};

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		loginAction: (state, action) => {
			state.user = action.payload;
		},
		logoutAction: (state, action) => {
			state.user = initialState.user;
		},
		getAccountAction: (state, action) => {
			state.user = action.payload;
		},
		getTokenAction: (state, action) => {
			state.token = action.payload;
		}
	},
	extraReducers: (builder) => {
	},
});

export const {loginAction, logoutAction} = accountSlice.actions;

export default accountSlice.reducer;
