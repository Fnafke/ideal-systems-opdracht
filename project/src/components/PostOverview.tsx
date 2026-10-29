import { useEffect, useState } from "react";
import { Post } from "../types/types";
import { PostService } from "../services/PostService";

const PostOverview: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const fetchPosts = async () => {
        const posts: Post[] = await PostService.fetchPosts();
        setPosts(posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <>
    <input 
        type="text" 
        placeholder="Search post titles" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
    />
    {filteredPosts.length > 0 && filteredPosts.map((post) => (
        <ul key={post.id}>
            <li>{post.title}</li>
        </ul>
    )) || <p>No posts available.</p>}
    </>
}

export default PostOverview;