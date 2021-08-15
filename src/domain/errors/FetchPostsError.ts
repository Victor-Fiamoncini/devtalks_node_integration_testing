export class FetchPostsError extends Error {
	constructor() {
		super('Error to fetch posts');

		this.name = 'FetchPostsError';
	}
}
