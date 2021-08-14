import { RemoteFetchPosts } from '@app/usecases/RemoteFetchPosts';

import { AxiosHttpClient } from '@infra/AxiosHttpClient';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

export class FetchPostsUseCaseFactory {
	static make() {
		const httpClient = new AxiosHttpClient();

		const url = `${JSON_PLACEHOLDER_URL}/posts`;

		return new RemoteFetchPosts(url, httpClient);
	}
}
