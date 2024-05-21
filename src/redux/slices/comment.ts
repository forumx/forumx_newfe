import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {CommentType} from "@/types/comment";

const initialState= {
	replyComment: {
		id: 0,
		user: {
			id: 0,
			username: "",
			img_url: ""
		},
		threadId: 1,
		content: "",
		createdAt: "",
		updatedAt: "",
		replyToId: null,
	}
	
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		setReplyComment: (state, action) => {
			console.log(action.payload);
			state.replyComment = action.payload;
		},
		removeReplyComment: (state) => {
			state.replyComment = initialState.replyComment;
		}
	},
	extraReducers: (builder) => {
	},
});

export const {setReplyComment, removeReplyComment} = commentSlice.actions;

export default commentSlice.reducer;
