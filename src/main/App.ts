import cors from 'cors';
import express from 'express';

import { RemoteFetchPosts } from '@app/RemoteFetchPosts';

import { AxiosHttpClient } from '@infra/AxiosHttpClient';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/posts', async (request, response) => {
	try {
		const httpClient = new AxiosHttpClient();
		const url = `${JSON_PLACEHOLDER_URL}/posts`;

		const remoteFetchPosts = new RemoteFetchPosts(url, httpClient);

		const posts = await remoteFetchPosts.fetchPosts();

		return response.status(200).json(posts);
	} catch {
		return response.status(400).json({ message: 'error' });
	}
});

export default app;
