import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../fetures/post/postSlics';

function PostFetch() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.post);
    const [selectedLimit, setSelectedLimit] = useState(5);
    const limit = [5, 10, 15];

    const fetchWithLimit = () => {
        dispatch(fetchPosts(selectedLimit));
    };

    return (
        <div>
            <p>Select limit, then fetch posts:</p>
            <select value={selectedLimit} onChange={(e) => setSelectedLimit(Number(e.target.value))}>
                {limit.map(lim => (
                    <option key={lim} value={lim}>
                        Show {lim} posts
                    </option>
                ))}
            </select>
            <button type="button" onClick={fetchWithLimit} style={{ marginLeft: '10px' }}>
                Fetch Posts
            </button>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostFetch;