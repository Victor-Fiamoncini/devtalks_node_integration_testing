import { HttpClient } from '@app/adapters/HttpClient';

import { AxiosHttpClient } from '@infra/AxiosHttpClient';

export class HttpClientFactory {
	static make(): HttpClient {
		return new AxiosHttpClient();
	}
}
