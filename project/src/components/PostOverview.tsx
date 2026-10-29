import { useEffect, useState } from "react";
import { Post } from "../types/types";
import { PostService } from "../services/PostService";

const PostOverview: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const posts: Post[] = await PostService.fetchPosts();
        setPosts(posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return <>
    {posts.map((post) => (
        <ul key={post.id}>
            <li>{post.title}</li>
        </ul>
    ))}
    </>
}

export default PostOverview;