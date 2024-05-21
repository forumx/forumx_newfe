import forumInstance from "@/utils/axiosCustomize/forum";
import {forumPaths} from "@/apis/forum/paths";
import {createCategoryRequest} from "@/apis/forum/types";

export const callGetAllCategories = () => {
	return forumInstance.get(forumPaths.categories);
}

export const callCreateCategory = (req: createCategoryRequest) => {
	return forumInstance.post(forumPaths.categories, req);
}