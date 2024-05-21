import forumInstance from "@/utils/axiosCustomize/forum";
import {forumPaths} from "@/apis/forum/paths";
import {CommentRequest} from "@/app/forum/components/comment/commentInput/commentInput";

export const callGetCommentByThreadId = (threadId: number) => {
	return forumInstance.get(`${forumPaths.comments}/${threadId}`);
}

export const callCommentToThread = (req: CommentRequest) => {
	return forumInstance.post(`${forumPaths.comments}`, req)
}