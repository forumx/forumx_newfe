"use client"

import {ThreadType} from "@/app/forum/type";
import React, {useEffect, useState} from "react";
import ThreadItem from "@/app/forum/components/thread/threadItem/threadItem";
import "./threadList.scss"
import {callGetAllThreads, callGetThreadsByCategory, callPostThread} from "@/apis/forum/threads.api";
import {Modal} from "antd";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

interface ThreadListProp {
	categoryId: number;
}

const initialState = {
	"title": "",
	"content": "",
	"user": {
		"id": 0
	},
	"category": {
		"id": 0
	}
}

const ThreadList:React.FC<ThreadListProp> = ({categoryId}) => {
	const [threadList, setThreadList] = useState<ThreadType[]> ([])
	const [threadRequest, setThreadRequest] = useState (initialState)
	const [value, setValue] = useState ("")
	const [valueTitle, setValueTitle] = useState ("")
	const user = useSelector((state: RootState) => state.account.user);
	
	
	useEffect(() => {
		const fetchData = async () => {
				const response = await callGetThreadsByCategory(categoryId);
				if(response.status === 200) {
					setThreadList(response.data.content);
				}
		};
		console.log(user)
		setThreadRequest({...threadRequest, category: {id: categoryId}})
		
		fetchData();
	}, [user]);
	
	const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		setThreadRequest({...threadRequest, content: value})
	}
	const handleChangeValueTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValueTitle(e.target.value);
		setThreadRequest({...threadRequest, title: valueTitle})
	}
	
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const showModal = () => {
		setIsModalOpen(true);
	};
	
	const handleOk = () => {
		handleSubmit();
		setIsModalOpen(false);
	};
	
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	
	const handleSubmit = async() => {
		
		console.log(user)
		setThreadRequest({...threadRequest, user: {id: user.id}});
		const res = await callPostThread(threadRequest);
		window.location.reload()
		console.log(res);
	}
	
	return (
		<div>
			<div className={"thread-list-wrapper"}>
				{threadList?.length > 0 ? (
					threadList.map((thread) => (
						<ThreadItem key={thread.id} thread={thread} />
					))
				) : (
					<p className={"empty-list"}>There is no threads in this category</p>
				)}
			</div>
			<button onClick={showModal}>Post thread</button>
			<Modal className={"modal"} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<div className={"form-item"}>
					<label htmlFor="title">Title:</label>
					<textarea placeholder={"Title here"} name="" id="title" cols={30} rows={1} value={valueTitle} onChange={handleChangeValueTitle}></textarea>
				</div>
				<div className={"form-item"}>
					<label htmlFor="content">Content:</label>
					<textarea placeholder={"Content here"} name="" id="content" cols={30} rows={1} value={value} onChange={handleChangeValue}></textarea>
				</div>
				
			</Modal>
		</div>
		
		
	)
}

export default ThreadList