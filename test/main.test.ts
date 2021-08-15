import { RemoteFetchPosts } from '../src/app/usecases/RemoteFetchPosts';

test('should test something...', () => {
	expect(10 / 5).toBe(2);

	expect(true).toBeTruthy();

	expect(Math.pow(3, 2) === 10).toBeFalsy();

	expect(RemoteFetchPosts).toBeDefined();

	const data = {
		name: 'John Doe',
	};

	expect(data).toMatchObject({ name: 'John Doe' });
});
