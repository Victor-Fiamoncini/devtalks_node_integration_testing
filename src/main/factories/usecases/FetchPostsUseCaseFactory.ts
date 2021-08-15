import { RemoteFetchPosts } from '@app/usecases/RemoteFetchPosts';

import { FetchPostsUseCase } from '@domain/usecases/FetchPostsUseCase';

import { HttpClientFactory } from '@main/factories/adapters/HttpClientFactory';

export class FetchPostsUseCaseFactory {
	static make(): FetchPostsUseCase {
		const url = 'https://jsonplaceholder.typicode.com/posts';

		const httpClient = HttpClientFactory.make();

		return new RemoteFetchPosts(url, httpClient);
	}
}
