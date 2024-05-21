import forumInstance from "@/utils/axiosCustomize/forum";
import {forumPaths} from "@/apis/forum/paths";

export const callGetCommentByThreadId = (threadId: number) => {
	return forumInstance.get(`${forumPaths.comments}/${threadId}`);
}