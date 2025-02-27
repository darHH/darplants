import axios from 'axios';
import { InstagramPost } from '../models/InstagramPost';

export class InstagramService {
    private accessToken: string | undefined;

    constructor() {
        this.accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    }

    async fetchPosts(): Promise<InstagramPost[]> {
        try {
            const response = await axios.get('https://graph.instagram.com/me/media', {
                params: {
                    fields: 'id,media_url,caption,permalink',
                    access_token: this.accessToken,
                },
            });

            let posts: InstagramPost[] = response.data.data
                .filter((post: any) => post.media_url.includes('jpg'))
                .map((post: any) => new InstagramPost(post.id, post.media_url, post.caption, post.permalink));

            await Promise.all(posts.map(async (post: InstagramPost) => {
                try {
                    await post.getPlantData();
                } catch (error) {
                    console.error(`Error fetching plant data for post ${post.id}`, error);
                }
            }));

            return posts.slice(0, -1); // Remove the last post
        } catch (error) {
            console.error('Failed to fetch posts from Instagram', error);
            return [];
        }
    }
}