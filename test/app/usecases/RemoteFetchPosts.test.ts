import axios from 'axios';
import supertest, { SuperTest, Test } from 'supertest';

import app from '../../../src/main/App';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RemoteFetchPosts', () => {
	let request: SuperTest<Test>;

	beforeAll(() => {
		request = supertest(app);
	});

	afterEach(() => jest.clearAllMocks());

	it('should successfully fetch posts remotely', async () => {
		mockedAxios.get.mockResolvedValue({
			data: [
				{
					userId: 1,
					id: 1,
					title: 'sunt aut facere repellat provident',
					body: 'quia et suscipit\nsuscipit recusandae',
				},
			],
		});

		const response = await request.get('/posts');

		expect(response.body).toEqual([
			{
				id: '1',
				title: 'sunt aut facere repellat provident',
				content: 'quia et suscipit\nsuscipit recusandae',
			},
		]);
	});
});
