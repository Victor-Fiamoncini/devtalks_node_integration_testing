import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { RemoteFetchPosts } from '@app/usecases/RemoteFetchPosts';

import { AxiosHttpClient } from '@infra/AxiosHttpClient';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/posts', async (request, response) => {
	try {
		const httpClient = new AxiosHttpClient();
		const url = `${JSON_PLACEHOLDER_URL}/posts`;

		const remoteFetchPosts = new RemoteFetchPosts(url, httpClient);

		const posts = await remoteFetchPosts.fetchPosts();

		return response.status(200).json(posts);
	} catch {
		return response.status(400);
	}
});

export default app;
