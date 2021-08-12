import cors from 'cors';
import express from 'express';

import { RemoteFetchPosts } from '@app/RemoteFetchPosts';

import { AxiosHttpClient } from '@infra/AxiosHttpClient';

const app = express();
const SERVER_PORT = 3333;
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

app.use(cors);

app.get('/', async (request, response) => {
	try {
		const httpClient = new AxiosHttpClient();

		const fetchPosts = new RemoteFetchPosts(
			`${JSON_PLACEHOLDER_URL}/posts`,
			httpClient
		);

		const posts = await fetchPosts.fetchPosts();

		return response.status(200).json(posts);
	} catch {
		return response.status(400).json({ message: 'error' });
	}
});

app.listen(SERVER_PORT, () => {
	return console.log(`Server listening on: ${SERVER_PORT}`);
});
