import { PostEntity } from '@domain/entities/PostEntity';

export class PostModel {
	private static posts: PostModel[] = [];

	constructor(public id: string, public title: string, public body: string) {}

	static fromJsonToModels(json: any[]): typeof PostModel {
		this.posts = json.map(postJson => {
			return new PostModel(
				String(postJson['id']),
				String(postJson['title']),
				String(postJson['body'])
			);
		});

		return this;
	}

	static fromModelsToEntities(): PostEntity[] {
		return this.posts.map(postModel => {
			return new PostEntity(postModel.id, postModel.title, postModel.body);
		});
	}
}
