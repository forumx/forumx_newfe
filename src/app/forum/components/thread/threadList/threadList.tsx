"use client"

import {ThreadType} from "@/app/forum/type";
import React, {useEffect, useState} from "react";
import ThreadItem from "@/app/forum/components/thread/threadItem/threadItem";
import "./threadList.scss"
import {callGetAllThreads, callGetThreadsByCategory} from "@/apis/forum/threads.api";

interface ThreadListProp {
	categoryId: number;
}

const ThreadList:React.FC<ThreadListProp> = ({categoryId}) => {
	const [threadList, setThreadList] = useState<ThreadType[]> ([])
	
	useEffect(() => {
		const fetchData = async () => {
				const response = await callGetThreadsByCategory(categoryId);
				if(response.status === 200) {
					setThreadList(response.data.content);
				}
		};
		
		fetchData();
	}, []);
	
	return (
		<div className={"thread-list-wrapper"}>
			{threadList?.length > 0 ? (
				threadList.map((thread) => (
					<ThreadItem key={thread.id} thread={thread} />
				))
			) : (
				<p className={"empty-list"}>There is no threads in this category</p>
			)}
		</div>
		
	)
}

export default ThreadList