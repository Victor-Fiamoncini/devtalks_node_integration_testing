import { PostEntity } from '@domain/PostEntity';

export interface FetchPosts {
	fetchPosts(): Promise<PostEntity[]>;
}
