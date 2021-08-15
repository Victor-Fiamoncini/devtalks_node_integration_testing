import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { FetchPostsUseCaseFactory } from '@main/factories/FetchPostsUseCaseFactory';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/posts', async (request, response) => {
	try {
		const remoteFetchPosts = FetchPostsUseCaseFactory.make();

		const fetchedPosts = await remoteFetchPosts.fetchPosts();

		return response.status(200).json(fetchedPosts);
	} catch (err) {
		return response.status(500).json(err.message);
	}
});

export default app;
