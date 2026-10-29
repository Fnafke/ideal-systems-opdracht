import { useEffect, useState } from "react";
import { Post, PostComment } from "../types/types";
import { PostService } from "../services/PostService";

type SinglePostOverviewProps = {
    post: Post;
    onClose: () => void;
};


const SinglePostOverview: React.FC<SinglePostOverviewProps> = ({ post, onClose }: SinglePostOverviewProps) => {
    const [comments, setComments] = useState<PostComment[]>([]);

    const fetchComments = async () => {
        const comments: PostComment[] = await PostService.fetchCommentsOnPost(post.id);
        setComments(comments);
    }

    useEffect(() => {
        fetchComments();
    }, []);
    
    return (
        <div>
            <button onClick={onClose}>Close</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}

export default SinglePostOverview;