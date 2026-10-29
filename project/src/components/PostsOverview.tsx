import { Post } from "../types/types";

type PostsOverviewProps = {
    posts: Post[];
    onViewPost: (post: Post) => void;
}

const PostsOverview: React.FC<PostsOverviewProps> = ({ posts, onViewPost }: PostsOverviewProps) => {

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                    <button onClick={() => onViewPost(post)}>View Post</button>
                </li>
            ))}
        </ul>
    )
}

export default PostsOverview;