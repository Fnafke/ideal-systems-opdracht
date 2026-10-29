import { Post } from "../types/types";

type SinglePostOverviewProps = {
    post: Post;
    onClose: () => void;
};


const SinglePostOverview: React.FC<SinglePostOverviewProps> = ({ post, onClose }: SinglePostOverviewProps) => {
    return (
        <div>
            <button onClick={onClose}>Close</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default SinglePostOverview;