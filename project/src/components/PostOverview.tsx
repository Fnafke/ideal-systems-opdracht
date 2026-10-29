import { Post } from "../types/types";

type PostOverviewProps = {
    posts: Post[];
    onViewPost: (post: Post) => void;
}

const PostOverview: React.FC<PostOverviewProps> = ({ posts, onViewPost }: PostOverviewProps) => {

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

export default PostOverview;