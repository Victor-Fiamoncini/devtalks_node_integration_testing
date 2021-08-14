import { PostEntity } from '@domain/entities/PostEntity';

export interface FetchPostsUseCase {
	fetchPosts(): Promise<PostEntity[]>;
}
