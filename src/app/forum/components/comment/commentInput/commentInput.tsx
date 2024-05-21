"use client"

import React, {useEffect, useState} from "react";
import {CommentType} from "@/types/comment";
import {useDispatch, useSelector} from "react-redux";
import "./commentInput.scss"
import {FaReply} from "react-icons/fa";
import {removeReplyComment} from "@/redux/slices/comment";
import {IoPaperPlane} from "react-icons/io5";
import {RootState} from "@/redux/store";
import {callCommentToThread} from "@/apis/forum/comments.api";

interface ICommentInputProps {
	threadId: number;
	
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

const CommentInput:React.FC<ICommentInputProps> = ({threadId}) => {
	const [inputValue, setInputValue] = useState ("");
	const [commentRequest, setCommentRequest] = useState<CommentRequest> (initialCommentRequest);
	const replyComment = useSelector((state: RootState) => state.comment.replyComment);
	const user = useSelector((state: RootState) => state.account.user);
	const dispatch = useDispatch();
	
	
		useEffect(() => {
			setCommentRequest((prev) => ({
				...prev,
				threadId: threadId,
				user: { id: user.id },
				replyToId: replyComment?.id || null,
			}));
		}, []);
		
	
	
	const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
		// console.log(inputValue)
		setCommentRequest({...commentRequest, content: inputValue});
		console.log(commentRequest)
		setCommentRequest((prev) => ({
			...prev,
			threadId: threadId,
			user: { id: user.id },
			replyToId: replyComment?.id || null,
		}));
	}
	
	const handleRemoveReply = () => {
		dispatch(removeReplyComment());

	}
	
	const handleComment = async() => {
		const res = await callCommentToThread(commentRequest);
		console.log(res);
		window.location.reload()
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
				<IoPaperPlane className={"icon"} onClick={handleComment}/>
			</div>
			
		</div>
	)
}

export default CommentInput;