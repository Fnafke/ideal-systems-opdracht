import { Post, PostComment } from "../types/types";

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

const fetchCommentsOnPost = async (postId: number): Promise<PostComment[]> => {
    try {
        const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching comments on post:', error);
        throw error;
    }
}

export const PostService = {
    fetchPosts,
    fetchCommentsOnPost,
}