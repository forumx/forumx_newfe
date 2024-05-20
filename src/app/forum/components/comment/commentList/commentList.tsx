"use client"

import React, {useEffect, useState} from "react";
import {CommentType} from "@/types/comment";
import CommentItem from "@/app/forum/components/comment/commentItem/commentItem";

interface CommentListProp {
	threadId: number | undefined
}

const CommentList:React.FC<CommentListProp> = ({threadId}) => {
	// console.log(threadId);
	const [commentList, setCommentList] = useState<CommentType[]> ([]);
	const id = threadId;
	
	useEffect(() => {
		// const id = threadId;
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_FORUM}/comments/${id}`, {
					method: 'GET',
					credentials: 'include'
				});
				
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				
				const data = await response.json();
				setCommentList(data.content);
				console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		console.log(id)
		threadId && fetchData();
	}, []);
	
	return (
		<>
			{commentList.length ?
				(commentList.map(comment => (
					<CommentItem key={comment.id} comment={comment}/>
				))) : (
					<>There is no comments in this thread</>
			)}
			
		</>
	)
}

export default CommentList;