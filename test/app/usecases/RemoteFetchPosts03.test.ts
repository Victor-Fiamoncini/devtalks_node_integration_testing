import nock from 'nock';
import supertest, { SuperTest, Test } from 'supertest';

import app from '../../../src/main/App';

describe('RemoteFetchPosts with mocking posts API', () => {
	let request: SuperTest<Test>;

	beforeAll(() => {
		request = supertest(app);
	});

	it('should successfully fetch posts remotely', async () => {
		nock('https://jsonplaceholder.typicode.com')
			.get('/posts')
			.reply(200, [
				{
					userId: 1,
					id: 1,
					title: 'sunt aut facere repellat provident',
					body: 'quia et suscipit\nsuscipit recusandae',
				},
			]);

		const response = await request.get('/posts');

		expect(response.body).toEqual([
			{
				id: '1',
				title: 'sunt aut facere repellat provident',
				content: 'quia et suscipit\nsuscipit recusandae',
			},
		]);
	});

	it('should return an error message if request fails', async () => {
		nock('https://jsonplaceholder.typicode.com')
			.get('/posts')
			.reply(500, [
				{
					message: 'Internal server error',
					status: 500,
				},
			]);

		const response = await request.get('/posts');

		expect(response.body).toEqual('Error to fetch posts');
	});
});
