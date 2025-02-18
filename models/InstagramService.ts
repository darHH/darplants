import axios from 'axios';
import { InstagramPost } from '../models/InstagramPost';

export class InstagramService {
    private accessToken: string | undefined;

    constructor() {
        this.accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    }

    async fetchPosts(): Promise<InstagramPost[]> {
        try {
            const response = await axios.get('https://graph.instagram.com/me/media', {
                params: {
                    fields: 'id,media_url,caption,permalink',
                    access_token: this.accessToken,
                },
        });

        // Filter out non-image posts
        return response.data.data  
            .filter((post: any) => post.media_url.includes('jpg'))
            .map((post: any) => new InstagramPost(post.id, post.media_url, post.caption, post.permalink));
        } catch (error) {
            console.error('Failed to fetch Plants from Instagram Feed', error);
            return [];
        }
    }
}