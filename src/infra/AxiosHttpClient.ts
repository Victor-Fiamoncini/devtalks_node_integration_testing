import axios from 'axios';

import { HttpClient } from '@app/adapters/HttpClient';

export class AxiosHttpClient implements HttpClient {
	async get(url: string): Promise<any> {
		const { data } = await axios.get(url);

		return data;
	}
}
