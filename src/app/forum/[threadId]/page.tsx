"use client"

import React, {useEffect, useState} from "react";
import {ThreadType} from "@/app/forum/type";
import {UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import "./threadDetails.scss"
import {FaReply} from "react-icons/fa";
import CommentList from "@/app/forum/components/comment/commentList/commentList";

const ThreadDetails = (props: any) => {
	const threadId = props.params.threadId;
	
	const [currentThread, setCurrentThread] = useState<ThreadType | undefined> ()
	
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
	return (
		<div>
			<div className={"thread-detail"}>
				<div className={"author"}>
					<Avatar className={"avatar"} size={64} icon={<UserOutlined />} src={currentThread?.user.img_url} />
					<div className={"author-name"}>{currentThread?.user.name}</div>
				</div>
				<div className={"thread"}>
					<div className={"post-time"}>
						<span>{currentThread?.createdAt}</span>
					</div>
					<div className={"content-wrapper"}>
						<div className={"content"}>
							{currentThread?.content}
						</div>
						<div className={"reply"}>
							<FaReply />
							<div className={"title"}>Reply</div>
						</div>
					</div>
				</div>
			</div>
			<CommentList threadId={currentThread?.id}/>
		</div>
		
	)
}

export default ThreadDetails;