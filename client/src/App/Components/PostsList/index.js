import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostsList() {

   const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
            console.log('useEffect: ' + response);
        })();
    });

    return (
        <div>
{/* {posts.map(post => <p>hi</p>)} */}
            {console.log(posts)}
            {posts.map( post => <p>hi</p>)}

        </div>
    );
}