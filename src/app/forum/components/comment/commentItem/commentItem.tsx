"use client"

import {CommentType} from "@/types/comment";
import React from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {FaReply} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {setReplyComment} from "@/redux/slices/comment";

interface ICommentItemProps {
	comment: CommentType
}

const CommentItem:React.FC<ICommentItemProps> = ({comment}) => {
	const dispatch = useDispatch();
	
	const handleReplyComment = () => {
		console.log(comment);
		dispatch(setReplyComment(comment));
	}
	
	return (
		<div className={"thread-detail"}>
			<div className={"author"}>
				<Avatar className={"avatar"} size={64} icon={<UserOutlined />} src={comment.user.img_url} />
				<div className={"author-name"}>{comment.user.username}</div>
			</div>
			<div className={"thread"}>
				<div className={"post-time"}>
					<span>{comment.createdAt}</span>
				</div>
				<div className={"content-wrapper"}>
					<div className={"content"}>
						{comment.content}
					</div>
					<div className={"reply"} onClick={handleReplyComment}>
						<FaReply />
						<div className={"title"}>Reply</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CommentItem