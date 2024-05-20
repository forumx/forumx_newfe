export type CommentType = {
	id: number,
	user: {
		id: number,
		username: string,
		img_url: string
	},
	threadId: 1,
	content: string,
	createdAt: string,
	updatedAt: string,
	replyToId: number | null,
}