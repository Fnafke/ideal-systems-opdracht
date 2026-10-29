import { Post } from "../types/types";

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

export const PostService = {
    fetchPosts,
}