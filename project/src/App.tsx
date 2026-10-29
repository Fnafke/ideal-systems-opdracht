import { useEffect, useState } from 'react';
//import './App.css';
import PostsOverview from './components/PostsOverview';
import { Post } from './types/types';
import { PostService } from './services/PostService';
import SinglePostOverview from './components/SinglePostOverview';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchPosts = async () => {
    const posts: Post[] = await PostService.fetchPosts();
    setPosts(posts);
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {!selectedPost && (
        <div>
          <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredPosts.length > 0 ? (
            <PostsOverview posts={filteredPosts} onViewPost={(post) => setSelectedPost(post)} />
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      )}

      {selectedPost && (
        <SinglePostOverview post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
}

export default App;
