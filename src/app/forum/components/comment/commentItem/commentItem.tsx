"use client"

import {CommentType} from "@/types/comment";
import React from "react";

interface ICommentItemProps {
	comment: CommentType
}

const CommentItem:React.FC<ICommentItemProps> = ({comment}) => {
	return (
		<>{comment.id}</>
	)
}

export default CommentItem