export type createCategoryRequest = {
	name: string;
	description: string;
}

export type postThreadRequest = {
	title: string;
	content: string;
	user: {
		id: number;
	}
	category: {
		id: number;
	}
}