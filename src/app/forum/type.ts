import {UserType} from "@/types/user";

export type ThreadType = {
	id: number,
	title: string,
	content: null,
	user: UserType,
	category: {
		id: number,
		name: string
	},
	createdAt: string,
	updatedAt: string,
	commentCount: number,
	upVoteCount: number | null,
	downVoteCount: number | null
}