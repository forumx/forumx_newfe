import {postThreadRequest} from "@/apis/forum/types";
import forumInstance from "@/utils/axiosCustomize/forum";
import {forumPaths} from "@/apis/forum/paths";

export const callPostThread = (req: postThreadRequest) => {
	return forumInstance.post(forumPaths.threads, req);
}

export const callGetAllThreads = () => {
	return forumInstance.get(forumPaths.threads);
}

export const callGetThreadsByCategory = (categoryId: number) => {
	return forumInstance.get(`${forumPaths.threads}/category/${categoryId}`)
}

