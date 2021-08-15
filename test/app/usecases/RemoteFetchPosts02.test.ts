import supertest, { SuperTest, Test } from 'supertest';

import { AxiosHttpClient } from '../../../src/infra/AxiosHttpClient';
import app from '../../../src/main/App';

jest.mock('../../../src/infra/AxiosHttpClient');

function mockSuccess() {
	AxiosHttpClient.prototype.get = jest.fn(async () => {
		return Promise.resolve([
			{
				userId: 1,
				id: 1,
				title: 'sunt aut facere repellat provident',
				body: 'quia et suscipit\nsuscipit recusandae',
			},
		]);
	});
}

function mockFailure() {
	AxiosHttpClient.prototype.get = jest.fn(async () => {
		return Promise.reject({
			message: 'Internal server error',
			status: 500,
		});
	});
}

describe('RemoteFetchPosts with mocking HttpClient impl', () => {
	let request: SuperTest<Test>;

	beforeAll(() => {
		request = supertest(app);

		mockSuccess();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should successfully fetch posts remotely', async () => {
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
		mockFailure();

		const response = await request.get('/posts');

		expect(response.body).toEqual('Error to fetch posts');
	});
});
