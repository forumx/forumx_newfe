import {postThreadRequest} from "@/apis/forum/types";
import forumInstance from "@/utils/axiosCustomize/forum";
import {forumPaths} from "@/apis/forum/paths";
import {useState} from "react";

export const callPostThread = (req: postThreadRequest) => {
	return forumInstance.post(forumPaths.threads, req);
}

export const callGetAllThreads = () => {
	return forumInstance.get(forumPaths.threads);
}

export const callGetThreadsByCategory = (categoryId: number) => {
	return forumInstance.get(`${forumPaths.threads}/category/${categoryId}`)
}


// type ThreadRequest =  {
// 	title: string;
// 	"content": string;
// 	"user": {
// 		"id": number
// 	},
// 	"category": {
// 		"id": number
// 	}
// }
// export const callPostThread = (req: ThreadRequest) => {
// 	return forumInstance.post(`${forumPaths.threads}`, req);
// }



