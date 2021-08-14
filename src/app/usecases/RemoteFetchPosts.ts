import { HttpClient } from '@app/adapters/HttpClient';
import { PostModel } from '@app/models/PostModel';

import { PostEntity } from '@domain/entities/PostEntity';
import { FetchPostsUseCase } from '@domain/usecases/FetchPostsUseCase';

export class RemoteFetchPosts implements FetchPostsUseCase {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async fetchPosts(): Promise<PostEntity[]> {
		const posts = await this.httpClient.get(this.url);

		return PostModel.fromJsonToModels(posts).fromModelsToEntities();
	}
}
