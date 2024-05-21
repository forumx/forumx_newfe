"use client"

import React, {useState} from "react";
import {CommentType} from "@/types/comment";
import {useDispatch, useSelector} from "react-redux";
import "./commentInput.scss"
import {FaReply} from "react-icons/fa";
import {removeReplyComment} from "@/redux/slices/comment";
import {IoPaperPlane} from "react-icons/io5";
import {RootState} from "@/redux/store";

interface ICommentInputProps {
	replyComment: CommentType | null
}

export type CommentRequest = {
	"user": {
		"id": number
	},
	"threadId": number,
	"content": string,
	"replyToId": number | null
}

const initialCommentRequest = {
	"user": {
		"id": 0
	},
	"threadId": 0,
	"content": "",
	"replyToId": null
}

const CommentInput:React.FC<ICommentInputProps> = () => {
	const [inputValue, setInputValue] = useState ("");
	const [commentRequest, setCommentRequest] = useState<CommentRequest> (initialCommentRequest)
	const replyComment = useSelector((state: RootState) => state.comment.replyComment);
	const dispatch = useDispatch();
	
	const handleChangeInput = (e) => {
		setInputValue(e.target.value);
		console.log(inputValue)
	}
	
	const handleRemoveReply = () => {
		dispatch(removeReplyComment())
	}
	
	return (
		<div className={"comment-input-wrapper"}>
			{replyComment.id ? (
				<div className={"reply-comment-wrapper"}>
					<div className={"icon-wrapper"}>
						<FaReply className={"icon"} />
						<div>Reply:</div>
					</div>
					<div className={"reply-comment"}>
						<div className={"author"}>
							{replyComment.user.username}
							<div className={"cancel-button"} onClick={handleRemoveReply}>X</div>
						</div>
						<div className={"content"}>{replyComment.content}</div>
					</div>
				</div>
				
			) : null}
			
			<div className={"comment-input"}>
				<div className={"label"}>Your comment:</div>
				<textarea placeholder={"Your comment..."} className={"input"} value={inputValue} onChange={handleChangeInput}/>
				<IoPaperPlane className={"icon"} />
			</div>
			
		</div>
	)
}

export default CommentInput;