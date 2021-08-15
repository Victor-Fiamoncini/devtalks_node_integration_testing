import axios from 'axios';
import supertest, { SuperTest, Test } from 'supertest';

import app from '../../../src/main/App';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RemoteFetchPosts with mocking axios impl', () => {
	let request: SuperTest<Test>;

	beforeAll(() => {
		request = supertest(app);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should successfully fetch posts remotely', async () => {
		mockedAxios.get.mockResolvedValueOnce({
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

	it('should return an error message if request fails', async () => {
		mockedAxios.get.mockRejectedValueOnce({
			message: 'Internal server error',
			status: 500,
		});

		const response = await request.get('/posts');

		expect(response.body).toEqual('Error to fetch posts');
	});
});
