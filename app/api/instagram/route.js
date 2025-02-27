// app/api/instagram/route.js
import { InstagramService } from '../../../models/InstagramService'; 

export async function GET() {
  const instagramService = new InstagramService();
  
  try {
    const posts = await instagramService.fetchPosts();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Instagram posts' }), { status: 500 });
  }
}