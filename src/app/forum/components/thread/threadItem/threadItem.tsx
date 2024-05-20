"use client"

import {ThreadType} from "@/app/forum/type";
import React from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import "./threadItem.scss"
import {useRouter} from "next/navigation";
import {forumPaths} from "@/apis/forum/paths";
import CommentList from "@/app/forum/components/comment/commentList/commentList";

interface ThreadItemProps {
	thread: ThreadType;
}

const ThreadItem:React.FC<ThreadItemProps> = ({thread}) => {
	const router = useRouter();
	
	const handleNavigateToThreadDetail = (threadId: number) => {
		router.push(`forum/${threadId}`)
	}
	
	return (
			<div className={"thread-item-wrapper"} onClick={() => handleNavigateToThreadDetail(thread.id)}>
				<div className={"author"}>
					<Avatar size="large" icon={<UserOutlined />} src={thread.user.img_url} />
					<span className={"author-name"}>{thread.user.name}</span>
				</div>
				<span className={"title"}>
				{thread.title}
			</span>
			</div>
		
	)
}

export default ThreadItem