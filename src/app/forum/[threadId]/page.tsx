"use client"

import React, {useEffect, useState} from "react";
import {ThreadType} from "@/app/forum/type";
import {UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import "./threadDetails.scss"
import {FaReply} from "react-icons/fa";
import CommentList from "@/app/forum/components/comment/commentList/commentList";
import CommentInput from "@/app/forum/components/comment/commentInput/commentInput";
import {CommentType} from "@/types/comment";
import {useDispatch} from "react-redux";
import {removeReplyComment} from "@/redux/slices/comment";

const initialState = {
	id: 0,
	title: "",
	content: null,
	user: {
		id: 0,
		username: "",
		name: "",
		enabled: true,
		img_url: ""
	},
	category: {
		id: 0,
		name: ""
	},
	createdAt: "",
	updatedAt: "",
	commentCount: 0,
	upVoteCount: null,
	downVoteCount: null
}

const ThreadDetails = (props: any) => {
	const threadId = props.params.threadId;
	const dispatch = useDispatch();
	
	const [currentThread, setCurrentThread] = useState<ThreadType> (initialState)
	const [replyComment, setReplyComment] = useState<CommentType | null> (null);
	
	useEffect (() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_FORUM}/threads/${threadId}`, {
					method: 'GET',
					credentials: 'include'
				});
				
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				
				const data = await response.json();
				// console.log(data)
				setCurrentThread(data);
				// console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		
		fetchData();
	}, [threadId]);
	
	const handleRemoveReply = () => {
		dispatch(removeReplyComment());
	}
	
	return (
		<div>
			<div className={"thread-detail"}>
				<div className={"author"}>
					<Avatar className={"avatar"} size={64} icon={<UserOutlined />} src={currentThread.user.img_url} />
					<div className={"author-name"}>{currentThread.user.name}</div>
				</div>
				<div className={"thread"}>
					<div className={"post-time"}>
						<span>{currentThread.createdAt}</span>
					</div>
					<div className={"content-wrapper"}>
						<div className={"content"}>
							{currentThread.content}
						</div>
						<div className={"reply"}>
							<FaReply />
							<div className={"title"} onClick={handleRemoveReply}>Reply</div>
						</div>
					</div>
				</div>
			</div>
			<div className={"bold white-text"}>#Comments ({currentThread.commentCount})</div>
			
			<CommentList threadId={currentThread.id}/>
			
			<CommentInput threadId={threadId}/>
		</div>
		
	)
}

export default ThreadDetails;