import { HttpClient } from '@app/HttpClient';
import { PostModel } from '@app/PostModel';

import { FetchPosts } from '@domain/FetchPosts';
import { PostEntity } from '@domain/PostEntity';

export class RemoteFetchPosts implements FetchPosts {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async fetchPosts(): Promise<PostEntity[]> {
		const posts = await this.httpClient.get(this.url);

		return PostModel.fromJsonToModels(posts).fromModelsToEntities();
	}
}
