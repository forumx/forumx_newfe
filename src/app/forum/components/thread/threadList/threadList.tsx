"use client"

import {ThreadType} from "@/app/forum/type";
import React, {useEffect, useState} from "react";
import ThreadItem from "@/app/forum/components/thread/threadItem/threadItem";
import "./threadList.scss"

interface ThreadListProp {
	categoryId: number;
}

const ThreadList:React.FC<ThreadListProp> = ({categoryId}) => {
	const [threadList, setThreadList] = useState<ThreadType[]> ([])
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_FORUM}/threads/category/${categoryId}`, {
					method: 'GET',
					credentials: 'include'
				});
				
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				
				const data = await response.json();
				setThreadList(data.content);
				// console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		
		fetchData();
	}, []);
	
	return (
		<div className={"thread-list-wrapper"}>
			{threadList.length > 0 ? (
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