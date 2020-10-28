export type FileType = {
	description: string,
	title: string,
	thumbnail: string,
	keyword: string,
	content: string,
	date: string,
	slug: string,
	tags: string[],
}

export type BlogType = {
	htmlString: string,
	data: {
		description: string,
		title: string,
		thumbnail: string,
		keyword: string,
		tags: string[],
	},
}

export type BlogProps = {
	fileList: FileType[],
}