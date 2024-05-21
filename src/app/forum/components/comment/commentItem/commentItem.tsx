"use client"

import {CommentType} from "@/types/comment";
import React from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {FaReply} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {setReplyComment} from "@/redux/slices/comment";
import "./commentItem.scss"

interface ICommentItemProps {
	comment: CommentType
}

const CommentItem:React.FC<ICommentItemProps> = ({comment}) => {
	const dispatch = useDispatch();
	
	const handleReply = () => {
		console.log(comment);
		dispatch(setReplyComment(comment));
	}
	
	return (
		<div>
			{comment.replyToId ? (
				<div className={"reply-comment-wrapper"}>
					<div className={"icon-wrapper"}>
						<FaReply className={"icon"} />
						<div>Reply:</div>
					</div>
					<div className={"reply-comment"}>
						<div className={"author"}>
							{comment.replyToId}
						</div>
						<div className={"content"}>{comment.replyToId}</div>
					</div>
				</div>
			
			) : null}
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
						<div className={"reply"} onClick={handleReply}>
							<FaReply />
							<div className={"title"}>Reply</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default CommentItem