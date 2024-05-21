"use client"

import React, {useEffect, useState} from "react";
import {CommentType} from "@/types/comment";
import CommentItem from "@/app/forum/components/comment/commentItem/commentItem";
import {callGetCommentByThreadId} from "@/apis/forum/comments.api";

interface CommentListProp {
	threadId: number;
}

const CommentList:React.FC<CommentListProp> = ({threadId}) => {
	const [commentList, setCommentList] = useState<CommentType[]> ([]);
	
	useEffect(() => {
		
		const fetchData = async () => {
				const response = await callGetCommentByThreadId(threadId);
				if(response.status === 200) {
					setCommentList(response.data.content);
				}
		};
		
		fetchData();
	}, [threadId]);
	
	return (
		<>
			{commentList.length ?
				(commentList.map(comment => (
					<CommentItem key={comment.id} comment={comment}/>
				))) : (
					<></>
			)}
			
		</>
	)
}

export default CommentList;